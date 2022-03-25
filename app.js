const express = require('express');
const app = express();
const cors = require('cors');
const { json } = require('body-parser');

const cats = [
    {id: 1, name: 'Patch', age: 2},
    {id: 2, name: 'Sheikha', age: 1},
    {id: 3, name: 'Mimi', age: 1}
]
//turn cats array into json object
JSON.stringify(cats);

const message = [{text: "Welcome to PatchCat Express"}];
JSON.stringify(message);

app.use(cors());

let body;
//main endpoint
app.get('/', (req, res) => {
    res.send(message);
});

//cats endpoint
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

