type ApiResponse = {
    id: number,
    title: string,
    body: string,
    tags: string[],
    reactions: { likes: number, dislikes: number },
    views: number,
    userId: number
};

async function call(): Promise<ApiResponse> | never {
    try {
        const response = await fetch('https://dummyjson.com/posts/1');
        if (!response.ok) { throw new Error('Network response was not ok'); }
        const data: ApiResponse = await response.json();
        return data;
    } catch (err) {
        if (err instanceof Error) {
            throw new Error(err.message);
        } else {
            throw new Error('An unknown error occurred');
        }
    }
}

call().then((data: ApiResponse) => {
    console.log(data);
});