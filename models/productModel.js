const products = [
    {name: 'iPhone 11', price: 35000, imageUrl: 'phone1.jpg', description: 'New Product'},
    {name: 'iPhone 12', price: 45000, imageUrl: 'phone2.jpg', description: 'New Product'},
    {name: 'iPhone 14', price: 70000, imageUrl: 'phone3.jpg', description: 'New Product'},
];


module.exports = class Product {

    constructor(name, price, imageUrl, description){
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.description = description;
    }

    saveProduct(){
        products.push(this);
    }

    //Class üzerinden product listesini döndürür
    static getAll(){
        return products;
    }

}


// const allProducts = Product.getAll(); //Static methodu kullandık


// const p = new Product('Samsung', 2000, '1.jpeg', 'New Product'); // Class türünden yeni ürün türettik 
// p.saveProduct();