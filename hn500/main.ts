import axios from 'axios';
import AWS from 'aws-sdk';
import 'dotenv/config';
import fs from 'fs';

type Story = {
    title: string;
    url: string;
    score: string;
    id: number;
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
    return stories.map((story) => `<a href="${story.url}">${story.title} - ${story.score} points </a>`).join('<br>');
};

const run = async () => {
    const { newStories, oldStories } = await getBestStoriesWithMinScore(500);

    const formattedNewStories = formatStoriesForEmail(newStories);
    const formattedOldStories = formatStoriesForEmail(oldStories);

    const emailContent =
        `<h1>HackerNews Best Stories</h1><br><p>Here are the best stories on HackerNews with at least 500 points.</p><br><hr><br>` +
        formattedNewStories +
        `<h1>All Past Stories Above 500 since July 13th</h1><br>` +
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
