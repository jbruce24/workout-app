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
app.get('/workouts', db.getWorkouts);
app.get('/movement', db.getMovements);
app.get('/program', db.getProgram);
app.get('/workoutType', db.getWorkoutType);
app.get('/workingSet', db.getWorkingSet);


app.listen(port , () => {
    console.log(`App running on port ${port}`);
});


