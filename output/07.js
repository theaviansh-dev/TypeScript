"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function showdata() {
    let key1 = document.getElementById('name');
    const name = key1.value;
    let key2 = document.getElementById('age');
    const age = Number(key2.value);
    document.writeln(`<b>Your name is ` + name + ` and your age is ` + age + `.`);
}
//# sourceMappingURL=07.js.map