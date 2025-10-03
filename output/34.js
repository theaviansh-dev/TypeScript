"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function call() {
    try {
        const response = await fetch('https://dummyjson.com/posts/1');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    }
    catch (err) {
        if (err instanceof Error) {
            throw new Error(err.message);
        }
        else {
            throw new Error('An unknown error occurred');
        }
    }
}
call().then((data) => {
    console.log(data);
});
//# sourceMappingURL=34.js.map