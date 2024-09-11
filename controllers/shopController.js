
const Product = require('../models/productModel');
const Category = require('../models/categoryModel');

module.exports.getIndex= (req,res,next) => {
    const  products = Product.getAll();
    const categories = Category.getAll();
    res.render('shop/index',
        {
            title: 'Shopping',
            products: products,
            categories: categories,
            path: '/'
        }
    );
} 

module.exports.getProducts= (req,res,next) => {
    const  products = Product.getAll();
    const categories = Category.getAll();

    res.render('shop/products',
        {
            title: 'Products',
            products: products,
            categories: categories,
            path: '/products'
        }
    );
} 

module.exports.getProductsByCategoryId =(req,res,next) => {
    const categoryid = req.params.categoryid;
    const products = Product.getProductsByCategoryId(categoryid);
    const categories = Category.getAll();

    res.render('shop/products', {
        title: 'Products',
        products: products,
        categories: categories,
        selectedCategory: categoryid,
        path:  '/products'
    });
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

