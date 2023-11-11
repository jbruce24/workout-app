const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port= 3000;
const db = require('./routes/query.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
    {
        extended:true,
    }
));

app.get('/', (request, response) => {
    response.json({info: 'Node.js, Express, and Postgres API'});
}); 

app.get('/users', db.getUsers);
app.get('/workouts', db.getWorkouts);app.get('/workouts', (req, res) => {
    try {
        getWorkouts(req, res);
    } catch (error) {
        console.error("Error in /workouts route: ", error);
        res.status(500).send('Server error');
    }
});

app.get('/movements', (req, res) => {
    try {
        getMovements(req, res);
    } catch (error) {
        console.error("Error in /movements route: ", error);
        res.status(500).send('Server error');
    }
});

app.listen(port , () => {
    console.log(`App running on port ${port}`);
});



