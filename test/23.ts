interface ClgStc {
    name: string;
    dTName(): void;
}

class College implements ClgStc {
    name: string;
    constructor(cName: string) {
        this.name = cName;
    }
    dTName(): void {
        console.log(true);
    }
}

var clg = new College('KIPM');