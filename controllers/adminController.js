
const Product = require('../models/productModel');
const Category = require('../models/categoryModel');

module.exports.getProducts= (req,res,next) => {
    const  products = Product.getAll();
    res.render('admin/products',
        {
            title: 'Admin Products',
            products: products,
            path: '/admin/products',
            action: req.query.action
        }
    );
} 


exports.getAddProduct = (req,res,next) => {
    const categories = Category.getAll();
    // res.sendFile(path.join(__dirname,'../','views', 'add-product.html'));
    //view engine kullanmak için render() foksiyonu kullanılır
    res.render('admin/add-product', 
        { 
            title: 'New Product',
            path:'/admin/add-product',
            categories: categories
        }
    ); //ilgili pug sayfasını kullanıcıya gönderir.
}


exports.postAddProduct = (req,res,next)=> {
    //Burada post kullanmamızın sebebi use kullanınca hem post hemde get methodunu kullanmış oluyoruz.
    //database kayıt

    const product = new Product();
    
    product.name = req.body.name;
    product.price = req.body.price;
    product.imageUrl = req.body.imageUrl;
    product.categoryid = req.body.categoryid;
    product.description = req.body.description;

    product.saveProduct();
    res.redirect('/');
}

exports.getEditProduct = (req,res,next) => {

    const product = Product.getById(req.params.productid);
    const categories = Category.getAll();

    res.render('admin/edit-product', 
        { 
            title: 'Edit Product',
            path:'/admin/products',
            product: product,
            categories: categories
        }
    ); 
}

exports.postEditProduct = (req,res,next)=> {
    const product = Product.getById(req.body.id);
    
    product.name = req.body.name;
    product.price = req.body.price;
    product.imageUrl = req.body.imageUrl;
    product.description = req.body.description;
    product.categoryid = req.body.categoryid;
    
    Product.Update(product);
    res.redirect('/admin/products?action=edit');
}

exports.postDeleteProduct = (req,res,next) => {
    Product.DeleteById(req.body.productid);
    res.redirect('/admin/products?action=delete');
}