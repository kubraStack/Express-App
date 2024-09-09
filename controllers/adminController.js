
const Product = require('../models/productModel');


module.exports.getProducts= (req,res,next) => {
    const  products = Product.getAll();
    res.render('admin/products',
        {
            title: 'Admin Products',
            products: products,
            path: '/admin/products'
        }
    );
} 


exports.getAddProduct = (req,res,next) => {
    
    // res.sendFile(path.join(__dirname,'../','views', 'add-product.html'));
    //view engine kullanmak için render() foksiyonu kullanılır
    res.render('admin/add-product', 
        { 
            title: 'New Product',
            path:'/admin/add-product'
        }
    ); //ilgili pug sayfasını kullanıcıya gönderir.
}


exports.postAddProduct = (req,res,next)=> {
    //Burada post kullanmamızın sebebi use kullanınca hem post hemde get methodunu kullanmış oluyoruz.
    //database kayıt

    const product = new Product
        (
            req.body.name, 
            req.body.price, 
            req.body.imageUrl, 
            req.body.description
        );
        product.saveProduct();
    res.redirect('/');
}

exports.getEditProduct = (req,res,next) => {
    res.render('admin/edit-product', 
        { 
            title: 'Edit Product',
            path:'/admin/edit-product'
        }
    ); 
}

exports.postEditProduct = (req,res,next)=> {
    
    res.redirect('/');
}