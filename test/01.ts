let key1: number = 12;
let key2: string = 'string';
let key3: boolean = true;
let key4: null = null;
let key5: undefined = undefined;
let key6: number[] = [1, 2, 3, 4, 5, 6, 7];
let key7: string[] = ['avinash', 'rohan', 'shyam'];
let key8: [string, boolean] = ['isLogged', true];
let key9: { name: string, age: number } = { name: 'avinash', age: 21 };
let key10: any = true; //can store anything
let key11: unknown = 12; //value should be dynamic
let key12 = (): void => {
    //doesn't return anything by default
}
let key13 = (): never => {
  throw new Error("This function will never return.");
}
let key14: string | number; //can accept string or number both
type key15 = number | [];  //custom type assing it and use
enum key16{subkey1, subkey2, subkey3}; //can be this keys assing only
let key17: 12 | 5; //no except this