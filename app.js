const express = require('express');
const app = express();
const cors = require('cors');

const cats = [
    {id: 1, name: 'Zelda', age: 3},
    {id: 2, name: 'TigerLily', age: 10},
    {id: 3, name: 'Rumble', age: 12}
]

app.use(cors());

app.get('/', (req, res) => {
    res.send('Let\'s get these cats!');
});

app.get('/cats', (req, res) => {
    res.send(cats)
});

app.get('/cats/:id', (req, res) => {
    console.log(req.query);
    const catId = req.params.id - 1;
    const selectedCat = cats[catId];
    res.send(selectedCat);
});

module.exports = app;

