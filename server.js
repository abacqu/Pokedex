const express = require('express');
const app = express();
// const Pokemon = require('./models/pokemon');
const Pokemon = require('./models/pokemon');


const port = 3000;


// INDEX
app.get('/', (req, res) => {
    // res.render('index.ejs', { pokemon: Pokemon });
    res.render('index.ejs', { pokemon: Pokemon});
});

// NEW

// DELETE

// UPDATE

// CREATE

// EDIT

// SHOW
app.get('/:id', (req, res) => {
    res.render('show.ejs', { pokemon: Pokemon[req.params.id] });
});









app.listen(port, () => {
    console.log("listening on port", port);
});