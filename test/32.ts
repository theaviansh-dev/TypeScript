function Override(target: any, key: any, descriptor: PropertyDescriptor) {
    descriptor.value = function Key1(x: number, y: number) {
        return 'answer is ' + Number(x + y);
    }
}

class One {
    @Override       //override an functon
    Key1(x: number, y: number) {
        return x + y;
    }
}

var o = new One();
console.log(o.Key1(2, 3));