type stc = {
    name:string,
    age:number,
    [key: string]: string | number | boolean | object | [];
}

var userdata: stc = {
    name: "avinash",
    age: 21,
    isEmployed: true,
    contact: { phone: 9026903770, email: 'itsnow.avi@gmail.com' },
    languages: ['engish', 'hindi', 'avadhi']
};