const express = require('express');
const router = express.Router();
const path = require('path');

const adminController = require('../controllers/adminController');





router.get('/add-product', adminController.getAddProduct);

router.post('/add-product', adminController.postAddProduct);

router.get('/products/:productid', adminController.getEditProduct);

router.post('/products', adminController.postEditProduct);


router.get('/products', adminController.getProducts);

module.exports = router;


//path modülünü kullanarak join methodu ile ilk önce __dirname ile bulunduğumuz dosyanın tam yolunu alıp sonra gitmemiz gereken dosyanın yolunu birleştirdik.
//Böylelikle kullanıcıyı html sayfasına yönlendirmiş olduk.