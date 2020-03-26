const express = require('express');

const fs = require('fs');

const path = require('path');

const { verificaTokenimg } = require('../middlewares/autenticacion');

let app = express();


app.get('/imagen/:tipo/:img', verificaTokenimg, (req, res) => {

    let tipo = req.params.tipo;
    let img = req.params.img;



    let pathImagen = path.resolve(__dirname, `../../uploads/${ tipo }/${img}`);

    if (fs.existsSync(pathImagen)) {
        res.sendFile(pathImagen);
    } else {

        let originalPath = path.resolve(__dirname, '../assets/original.jpg');

        res.sendFile(originalPath);

    }

});






module.exports = app;