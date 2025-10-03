interface Structure {
    name: string,
    age: number,
    phone: number,
    email: string
}

var our: Structure = {
    name: 'avinash',
    age: 21,
    phone: 90923,
    email: 'sdadff'
}

interface outer extends Structure {
    city: string
}

var outer: outer = {
    name: 'rohan',
    age: 21,
    phone: 123123,
    email: 'dfwdfrf',
    city: 'gkp'
}