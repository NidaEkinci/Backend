var mongoose = require('mongoose');
var dbURI = "mongodb+srv://nidaekinci:NidaEkinci.2032@cluster0.15izu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; //başta böyle db oluşturulmamıştı (bağlantı adresimiz)
//mongodb cloud kullanırken değiştiremmeiz gereken adres
mongoose.connect(dbURI); 

// mongoose.connection.on(); //bağlanıp bağlanmadığı kontrolü ve bağlandığında yapılması istenilen işlemlerin belirtileceği yer

mongoose.connection.on("connected", function(){
    console.log(dbURI + "Bağlandı")
});

mongoose.connection.on("disconnected", function(){
    console.log(dbURI + "Bağlantı koptu")
});

process.on("SIGINT", function(){
    mongoose.connection.close();
    console.log("Bağlantı kesildi!");
    process.exit(0);
});

require('./venue'); //venue kullanacağımızı belirttik