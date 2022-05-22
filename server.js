const express = require('express');
const app = express();
const Pokemon = require('./models/pokemon');
const methodOverride = require("method-override");


const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(express.static(__dirname + '/public'));

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

app.delete("/:id", (req, res) => {
    Pokemon.splice(req.params.id, 1) //remove the item from the array
    res.redirect("/") //redirect back to index route
})

// UPDATE

app.put("/:id", (req, res) => {
    // console.log(req.params.id);
    Pokemon[req.params.id].name = req.body.name;
    Pokemon[req.params.id].type = req.body.type;
    Pokemon[req.params.id].stats.hp = req.body.hp;
    Pokemon[req.params.id].stats.attack = req.body.attack;
    Pokemon[req.params.id].stats.defense = req.body.defense;
    res.redirect("/") //redirect to the index page
  })

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

app.get("/:id/edit", (req, res) => {
    res.render(
        "edit.ejs",
        {
            pokemon: Pokemon[req.params.id],
            id: req.params.id,
        } 
    )
})

// SHOW
app.get('/:id', (req, res) => {
    res.render('show.ejs', { pokemon: Pokemon[req.params.id] });
});









app.listen(port, () => {
    console.log("listening on port", port);
});