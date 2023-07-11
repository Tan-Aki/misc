import axios from 'axios';

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

        if (story.score >= minScore) {
            // Only include the title and URL in the output
            bestStories.push({
                title: story.title,
                url: story.url,
            });
        }
    }

    return bestStories;
};

const formatStoriesForEmail = (stories: { title: string; url: string }[]) => {
    return stories.map((story) => `<a href="${story.url}">${story.title}</a>`).join('<br>');
};

const run = async () => {
    const stories = await getBestStoriesWithMinScore(500);

    const emailContent = formatStoriesForEmail(stories);

    console.log(emailContent);
};

run().catch(console.error);
