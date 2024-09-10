const products = [
    {id: "12361",name: 'iPhone 11', price: 35000, imageUrl: 'phone1.jpg', description: 'New Product'},
    {id: "12362",name: 'iPhone 12', price: 45000, imageUrl: 'phone2.jpg', description: 'New Product'},
    {id: "12363",name: 'iPhone 14', price: 70000, imageUrl: 'phone3.jpg', description: 'New Product'},
];


module.exports = class Product {

    constructor(name, price, imageUrl, description){
        this.id = (Math.floor(Math.random() * 99999) + 1).toString(); 
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

    //Details
    static getById(id){
        const product = products.find(i => i.id === id);
        return product;
    }

    static Update(product){
        const index = products.findIndex(i => i.id === product.id);
        products[index].name = product.name;

        products[index].price = product.price;
        products[index].imageUrl = product.imageUrl;
        products[index].description = product.description;
    }

}


// const allProducts = Product.getAll(); //Static methodu kullandık


// const p = new Product('Samsung', 2000, '1.jpeg', 'New Product'); // Class türünden yeni ürün türettik 
// p.saveProduct();