const app = require('./app');

const port = 3001;

app.listen(port,() => {
    console.log(`Patchcat Express is taking off from http://localhost:${port}`);
});

