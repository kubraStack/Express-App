const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shopController');

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/details', shopController.getProductDetails);

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

module.exports = router;

//Dinamik içerik eklerken render'a ikinci parametre olarak değeri veririz.
// res.sendFile(path.join(__dirname,'../','/views','/index.html'));
// next(); //middlewaredeki işlemler bittikten sonra sürecin devam edebilmesi için next() fonksiyonu kullanılır.