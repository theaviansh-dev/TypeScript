function showdata(){
    let key1 = document.getElementById('name') as HTMLInputElement;
    const name:String = key1.value;
    let key2 = document.getElementById('age') as HTMLInputElement;
    const age:number = Number(key2.value);
    document.writeln(`<b>Your name is `+name+` and your age is `+age+`.`);
}