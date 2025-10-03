interface A {
    a: string
}
interface B {
    b: string
}
interface C {
    c: string
}

var e: A & B & C = {
    a: 'xyz',
    b: 'xyz',
    c: 'xyz'
}