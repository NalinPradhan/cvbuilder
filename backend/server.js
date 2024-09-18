// connection string: mongodb+srv://nalinforodin:Kansasnalin1@theodinproject.w97oi.mongodb.net/?retryWrites=true&w=majority&appName=theodinproject
//username: nalinforodin
// pw:Kansasnalin1
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dbURI= 'mongodb+srv://nalinforodin:Kansasnalin1@theodinproject.w97oi.mongodb.net/cv?retryWrites=true&w=majority&appName=theodinproject';
mongoose.connect(dbURI).then((result) => {
    console.log('connected to db');
    app.listen(3000) ;
}).catch((err) => console.log(err));