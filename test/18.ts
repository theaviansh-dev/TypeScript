class Product {
    name:string;
    price:number;
    pId:number;
    inOrder=false;
    constructor(name:string, price:number, pId:number){
        this.name = name;
        this.price = price;
        this.pId = pId;
    }
    addToCart():void{
        this.inOrder=true;
    }
    chekOut():string{
        if(this.inOrder){
            return `product name ${this.name} ordered for the price of ${this.price}`;
        } else {
            return 'no product found';
        }
    }
}

var product = new Product('car', 1000, 123);
product.addToCart();
console.log(product.chekOut());