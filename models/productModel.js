const products = [
    {id: "12361",name: 'iPhone 11', price: 35000, imageUrl: 'phone1.jpg', description: 'New Product', categoryid: "1"},
    {id: "12362",name: 'iPhone 12', price: 45000, imageUrl: 'phone2.jpg', description: 'New Product',categoryid: "1"},
    {id: "12363",name: 'iPhone 14', price: 70000, imageUrl: 'phone3.jpg', description: 'New Product',  categoryid: "1"},
    {id: "12364",name: 'Macbook', price: 26000, imageUrl: 'macbook.jpg', description: 'Macbook New Notebook',  categoryid: "2"},
    {id: "12365",name: 'Kurutma Makinesi', price: 18549, imageUrl: 'kurutma.jpg', description: 'Çamaşır Kurutma Makinesi',  categoryid: "3"},

];


module.exports = class Product {

    constructor(name, price, imageUrl, description, categoryid){
        this.id = (Math.floor(Math.random() * 99999) + 1).toString(); 
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.description = description;
        this.categoryid = categoryid;
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
        return  products.find(i => i.id === id);
        
    }
    static getProductsByCategoryId(categoryid){
        return products.filter(i=> i.categoryid === categoryid);
    }
    
    static Update(product){
        const index = products.findIndex(i => i.id === product.id);
        products[index].name = product.name;

        products[index].price = product.price;
        products[index].imageUrl = product.imageUrl;
        products[index].description = product.description;
    }

    static DeleteById(id){
        const index = products.findIndex(i => i.id === id);
        products.splice(index,1);
    }
}


// const allProducts = Product.getAll(); //Static methodu kullandık


// const p = new Product('Samsung', 2000, '1.jpeg', 'New Product'); // Class türünden yeni ürün türettik 
// p.saveProduct();