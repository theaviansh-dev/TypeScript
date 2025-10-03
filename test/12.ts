function n(): string {
    return 'name';
}

function a(): number {
    return 20 * 20;
}

function b() {
    //default void
}

function c(): number | boolean {
    return 12;
}

function d(): any {
    return 'any';
}

function e(): never {
    throw new Error("error");
}

console.log(n(), a(), b(), c(), d(), e());