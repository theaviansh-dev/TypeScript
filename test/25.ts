var user1:number|string|boolean = '12';
user1 = true;
console.log(typeof(user1));

function type(data:string|number|boolean){
    console.log(typeof(data));
}

type(true);

class Product {
}
var p1 = new Product();
class View {
}
var v = new View();

function checkDetails(data:Product|View){
    if(data instanceof View){
        console.log('view');
    } else {
        console.log('product');
    }
}

checkDetails(p1);