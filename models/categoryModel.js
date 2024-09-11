const catategories = [
    {id: '1', name: 'Telefon', description: "Telefon Ürünleri"},
    {id: '2', name: 'Bilgisayar', description: "Bilgisayar Ürünleri"},
    {id: '3', name: 'Beyaz Eşya' , description: "Beyaz Eşya Ürünleri"}
];

module.exports = class Category {
    constructor(name, description){
        this.id = (catategories.length + 1).toString();
        this.name = name;
        this.description = description;
    }

    saveCategory(){
        catategories.push(this);
    }

    static getAll(){
        return catategories;
    }

    static getById(id){
        return catategories.find(i => i.id === id);
    }
    
    static Update(category){
        const index = catategories.findIndex(i => i.id === category.id);
        catategories[index].name = category.name;
        catategories[index].description = category.description;
    }

    static DeleteById(id){
        const index = catategories.findIndex(i=>i.id === id);
        catategories.splice(index,1);
    }
}