var a: Number[] = [1, 2, 3, 4, 5];        //only for number
var b: string[] = ['a', 'b', 'c', 'd'];        //only for string
var c: boolean[] = [true, false, true];      //only for bool
var d: [number, boolean] = [12, true];       //key 1 is number and other is bool
a.push(6);
d.push(false, 10);
console.log(a, b, c, d);

var e:ReadonlyArray<number> = [1,2,3,4,5];
console.log(e[2]);