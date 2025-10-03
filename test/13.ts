function add(x: number, y: number | string): number | boolean {
    var key1 = Number(x);
    var key2 = Number(y);
    const t: number = key1 + key2;
    if(t.toString() == 'NaN'){ return false; }
    return t;
}

console.log(add(12, '89'));