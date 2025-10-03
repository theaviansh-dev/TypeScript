class Obj {
    key1(): boolean {
        //bydefault public
        return true;
    }

    private key2():boolean {
        //only accessable for these
        return true;
    }

    private key3():boolean {
        //only for these and extended
        return true;
    }
}

var obj = new Obj();
console.log(obj.key1());