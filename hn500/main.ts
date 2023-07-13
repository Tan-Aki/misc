import axios from 'axios';
import AWS from 'aws-sdk';
import 'dotenv/config';

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
    const bestStories: any[] = [];

    for (const id of bestStoryIds) {
        const story = await getStory(id);
        console.log(`${story.title} - ${story.score} points`);

        if (story.score >= minScore) {
            bestStories.push({
                title: story.title,
                url: story.url,
                score: story.score,
            });
        }
    }

    return bestStories;
};

const formatStoriesForEmail = (stories: { title: string; url: string; score: string }[]) => {
    return stories.map((story) => `<a href="${story.url}">${story.title} - ${story.score} points </a>`).join('<br>');
};

const run = async () => {
    const stories = await getBestStoriesWithMinScore(500);

    const formattedStories = formatStoriesForEmail(stories);

    const emailContent = `<h1>HackerNews Best Stories</h1><br><p>Here are the best stories on HackerNews with at least 500 points.</p><br><hr><br>` + formattedStories;

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
        else console.log(data);
    });
};

run().catch(console.error);
