import axios from 'axios';
import AWS from 'aws-sdk';
import 'dotenv/config';
import fs from 'fs';

type Story = {
    title: string;
    url: string;
    score: string;
    id: number;
    time: string;
};

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
});

const ses = new AWS.SES({ apiVersion: '2010-12-01' });

const HN_API = 'https://hacker-news.firebaseio.com/v0';

const getStory = async (storyId: number) => {
    const response = await axios.get(`${HN_API}/item/${storyId}.json`);
    return response.data;
};

const getBestStories = async () => {
    const response = await axios.get(`${HN_API}/beststories.json`);
    return response.data as number[];
};

const getBestStoriesWithMinScore = async (minScore: number) => {
    const bestStoryIds = await getBestStories();
    const newStories: Story[] = [];
    const oldStories: Story[] = [];

    const alreadySentStories = fs.existsSync('alreadySentStories.json') ? JSON.parse(fs.readFileSync('alreadySentStories.json', 'utf8')) : [];

    const alreadySentStoryIds = alreadySentStories.map((story: Story) => story.id);

    for (const id of bestStoryIds) {
        const story = await getStory(id);
        console.log(`${story.title} - ${story.score} points`);

        if (story.score >= minScore) {
            const storyData = {
                id: story.id,
                title: story.title,
                url: story.url,
                score: story.score,
                time: new Date(story.time * 1000).toISOString(), // Convert Unix timestamp to ISO string
            };

            if (alreadySentStoryIds.includes(story.id)) {
                oldStories.push(storyData);
            } else {
                newStories.push(storyData);
            }
        }
    }

    return { newStories, oldStories };
};

const formatStoriesForEmail = (stories: Story[]) => {
    stories.sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());
    return stories.map((story) => `<a href="${story.url}">${story.title} - ${story.score} points </a>`).join('<br>');
};

const run = async () => {
    const { newStories, oldStories } = await getBestStoriesWithMinScore(500);

    const formattedNewStories = formatStoriesForEmail(newStories);
    const formattedOldStories = formatStoriesForEmail(oldStories);

    const emailContent =
        `<h2>HackerNews Best Stories above 500 points since last issue (most recent to the top)</h2>` +
        (formattedNewStories.length > 0 ? formattedNewStories : `Nothing new...`) +
        `<br><br><hr>` +
        `<h2>All Past Stories Above 500 since July 13th (most recent to the top)</h2>` +
        formattedOldStories;

    var params = {
        Destination: {
            ToAddresses: ['tanneguy.jullin@gmail.com'],
        },
        Message: {
            Body: {
                Html: {
                    Charset: 'UTF-8',
                    Data: emailContent,
                },
            },
            Subject: {
                Charset: 'UTF-8',
                Data: 'HackerNews Best Stories',
            },
        },
        Source: 'no-reply@hn500.xyz',
    };

    ses.sendEmail(params, function (err, data) {
        if (err) console.log(err, err.stack);
        else {
            console.log(data);
            const oldStoriesFromFile = fs.existsSync('alreadySentStories.json') ? JSON.parse(fs.readFileSync('alreadySentStories.json', 'utf8')) : [];
            const updatedStories = [...newStories, ...oldStoriesFromFile];
            fs.writeFileSync('alreadySentStories.json', JSON.stringify(updatedStories, null, 2));
        }
    });
};

run().catch(console.error);
