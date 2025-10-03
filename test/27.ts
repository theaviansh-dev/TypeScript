type Person = {
    name: string,
    age: number,
    city: string,
    isEmployed: boolean
}

let data: Person = { name: 'avinash', age: 21, city: 'gkp', isEmployed: true };

let dataOne:keyof Person = "name";      //only can be person's key