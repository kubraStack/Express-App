const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/shop');

const path = require('path');
const errorController = require('./controllers/errorsController');

app.set('view engine', 'pug'); //Uygulamanın varsayılan template engine'ini Pug olarak ayarlar
app.set('views', './views'); //Pug dosyalarının bulunacağı dosyayı belirler (varsayılan olarak ayarlanan views'dir).


//Genellikle use() fonksiyonu ile middleware oluşturulur.3 parametreli bir callback fonksiyonu ile oluşturulur.

//bodyparse middleware
app.use(bodyParser.urlencoded({extended: false}));
//middleware
app.use(express.static(path.join(__dirname, 'public')));


//routes
app.use('/admin', adminRoutes);
app.use(userRoutes);

app.use(errorController.get404Page);


// app.use((req,res) => {
//     res.status(404).sendFile(path.join(__dirname,'views','404.pug'));
// });

app.listen(3000, () => {
    console.log("Listening on port 3000");
});






//Not : Express.js'de http sorgularında content-type default olarak text/html 'dir.
//NOT: Express.jsde route düzenlemesi yaparken yukarıdan aşağıya doğru bir sıralama işlemi vardır.Çünkü response döndürüldüğü zaman diğer route işlemine bakmaz.
//NOT: Express.js ile response'nin body'sine ulaşmak için ayrı paket olan body-parser'o projeye npm ile indirim sonra require ile dahil etmemiz gerekir.
// Ek olarak bodyparser'ı kullanmak için ek olarak bir middleware oluşturmamız gerekir.Body-parser'ın bize sağlamış olduğu kolaylık ise daha önce bufferlarla uğraşmak zorunda kalıyorduk şimdi direk request'in body'si ile data'nın ayrıştırılmış halini görmüş oluyoruz.
// Use() ile bir routes oluşturursak linkin (/) ile başladığını gördüğü an gerisine bakmadan sayfanın en sonundaki routes'ı çalıştırır.Ancak GET ise full uyumlu olması lazım .