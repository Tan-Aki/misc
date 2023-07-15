import axios from 'axios';
import AWS from 'aws-sdk';
import 'dotenv/config';
import fs from 'fs';

type APIStory = {
    title: string;
    url: string;
    score: number;
    id: number;
    time: number;
};

type Story = {
    title: string;
    url: string;
    score: number;
    id: number;
    date: Date;
    previousScore: number;
};

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
});

const ses = new AWS.SES({ apiVersion: '2010-12-01' });

const HN_API = 'https://hacker-news.firebaseio.com/v0';

const getStory = async (storyId: number): Promise<APIStory> => {
    const response = await axios.get(`${HN_API}/item/${storyId}.json`);
    return response.data;
};

const getBestStories = async () => {
    const response = await axios.get(`${HN_API}/beststories.json`);
    return response.data as number[];
};

const alreadySentStories = fs.existsSync('alreadySentStories.json') ? JSON.parse(fs.readFileSync('alreadySentStories.json', 'utf8')) : [];

const getBestStoriesWithMinScore = async (minScore: number) => {
    const bestStoryIds = await getBestStories();
    const newStories: Story[] = [];
    const oldStories: Story[] = [];

    const fetchedStories = await Promise.all(bestStoryIds.map((id) => getStory(id)));

    fetchedStories.forEach((story) => {
        if (story.score >= minScore) {
            const alreadySentStory = alreadySentStories.find((sentStory: Story) => sentStory.id === story.id);

            const storyData: Story = {
                id: story.id,
                title: story.title,
                url: story.url,
                score: story.score,
                date: new Date(story.time * 1000), // Convert Unix timestamp
                previousScore: alreadySentStory ? alreadySentStory.score : story.score,
            };

            if (alreadySentStory) {
                if (storyData.score !== storyData.previousScore) {
                    // The story's score has changed
                    alreadySentStory.score = storyData.score;
                    alreadySentStory.previousScore = storyData.previousScore;
                }
                oldStories.push(storyData);
            } else {
                newStories.push(storyData);
                alreadySentStories.push(storyData);
            }
        }
    });
    return { newStories, oldStories };
};

const formatStoriesForEmail = (stories: Story[]) => {
    stories.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return stories
        .map((story) => `• <a href="${story.url}">${story.title}</a> - ${story.score} points (<a href="https://news.ycombinator.com/item?id=${story.id}">HN Link</a>)`)
        .join('<br><br>');
};

const run = async () => {
    const { newStories, oldStories } = await getBestStoriesWithMinScore(500);

    // Don't send email if there are no new stories
    if (newStories.length === 0) {
        console.log('No new stories found.');
        return;
    }

    const formattedNewStories = formatStoriesForEmail(newStories);

    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

    const recentOldStories = oldStories.filter((story) => new Date(story.date) >= thirtyDaysAgo);
    const formattedRecentOldStories = formatStoriesForEmail(recentOldStories);

    const emailContent =
        `<h2>HackerNews Stories above 500 points since last issue (most recent to the top)</h2>` +
        formattedNewStories +
        `<br><br><hr>` +
        `<h2>HackerNews Past Stories above 500 points within the Last 30 Days (most recent to the top)</h2>` +
        formattedRecentOldStories;

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
        Source: 'HN500 <no-reply@hn500.xyz>',
    };

    ses.sendEmail(params, function (err, data) {
        if (err) {
            console.log(err, err.stack);
        } else {
            console.log(data);
            // Update the file with new and updated stories only after the email is successfully sent
            fs.writeFileSync('alreadySentStories.json', JSON.stringify(alreadySentStories, null, 2));
        }
    });
};

run().catch(console.error);
