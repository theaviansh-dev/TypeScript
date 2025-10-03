class Com {
    name: string = 'google';     //non static method
    static rollno: number = 12;      //static mehtod
}

var c1 = new Com();
console.log(c1.name);       //for non static method
console.log(Com.rollno);        //for static method