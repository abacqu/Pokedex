const express = require('express');
const app = express();
// const Pokemon = require('./models/pokemon');
const Pokemon = require('./models/pokemon');
const methodOverride = require("method-override");


const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));


// INDEX
app.get('/', (req, res) => {
    // res.render('index.ejs', { pokemon: Pokemon });
    res.render('index.ejs', { pokemon: Pokemon});
});

// NEW

app.get("/new", (req, res) => {
    res.render('new.ejs', { Pokemon: Pokemon });
});

// DELETE

// UPDATE

// CREATE

app.post("/", (req, res) => {
    // let pok = {};
    // pok.name = req.body.name;
    // pok.type = req.body.type;
    // pok.stats = { hp: req.body.hp,
    //               attack: req.body.attack,
    //               defense: req.body.defense };
    Pokemon.push({
        name: req.body.name,
        type: req.body.type,
        stats: {
            hp: req.body.hp,
            attack: req.body.attack,
            defense: req.body.defense
        }
    });
    res.redirect("/") //send the user back to "/"
});

// EDIT

// SHOW
app.get('/:id', (req, res) => {
    res.render('show.ejs', { pokemon: Pokemon[req.params.id] });
});









app.listen(port, () => {
    console.log("listening on port", port);
});