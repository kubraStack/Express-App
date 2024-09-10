
const Product = require('../models/productModel');


module.exports.getIndex= (req,res,next) => {
    const  products = Product.getAll();
    res.render('shop/index',
        {
            title: 'Shopping',
            products: products,
            path: '/'
        }
    );
} 

module.exports.getProducts= (req,res,next) => {
    const  products = Product.getAll();
    res.render('shop/products',
        {
            title: 'Products',
            products: products,
            path: '/products'
        }
    );
} 

module.exports.getProduct= (req,res,next) => {
   const product = Product.getById(req.params.productid);

   res.render('shop/product-detail', {
        title: product.name,
        product: product,
        path: '/products'      
    });
  
} 

module.exports.getProductDetails= (req,res,next) => {
    const  products = Product.getAll();
    res.render('shop/details',
        {
            title: 'Details',
            path: '/details'
        }
    );
} 

module.exports.getCart= (req,res,next) => {
    const  products = Product.getAll();
    res.render('shop/cart',
        {
            title: 'Cart',
            path: '/cart'
        }
    );
} 
module.exports.getOrders= (req,res,next) => {
    const  products = Product.getAll();
    res.render('shop/orders',
        {
            title: 'Orders',
            path: '/orders'
        }
    );
} 

