const express = require('express');
const app = express();
const Pokemon = require('../models/pokemon.js');


const port = 3000;


// INDEX
app.get('/', (req, res) => {
    res.render('index.ejs', { data: Pokemon });
});


// SHOW
app.get('/:id', (req, res) => {
    res.render('show.ejs', { data: Pokemon[req.params.id] });
});









app.listen(port, () => {
    console.log("listening on port", port);
});