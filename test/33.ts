//simple promise example
function one(): Promise<string> {
    return new Promise((res) => {
        setTimeout(() => {
            res('functio 1');
        }, 2000);
    });
}

one().then((data: string) => {
    console.log(data), two();
});

function two(): void {
    console.log('function 2');
}
/////////////////////////////////////


//typescript example
type resultType = {
    name: string,
    age: number,
    city: string
}

function One(): Promise<resultType> {
    return new Promise((res) => {
        setTimeout(() => {
            res({ name: 'xyz', age: 21, city: 'gkp' });
        }, 2000);
    });
}

One().then((data: resultType) => {
    console.log(data), Two();
});

function Two(): void {
    console.log('function 2');
}