
const express = require('express');
const mongoose = require('mongoose');
const Cv = require('./model');

const app = express();
const dbURI = 'mongodb+srv://nalinforodin:Kansasnalin1@theodinproject.w97oi.mongodb.net/cv?retryWrites=true&w=majority&appName=theodinproject';
mongoose.connect(dbURI).then((result) => {
    console.log('connected to db');
    app.listen(3000);

}).catch((err) => console.log(err));
app.get('/add-cv', (req, res) => {
    const newCv = new Cv({
        name: 'Aprina Shah',
        email: 'aprina@gmial.com',
        phone: '1234567890'
    });
    newCv.save().then((result) => {
        console.log('cv added');
        res.send(result);
    }).catch((err) => {
        console.log(err);
    });
});