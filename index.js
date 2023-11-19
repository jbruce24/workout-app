const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port= 3000;
const db = require('./routes/query.js');
const dbPost = require('./routes/write.js');


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
app.post('/movement', dbPost.addMovement);
app.post('/program', dbPost.addProgram);
app.post('/workoutType', dbPost.addWorkoutType);
app.post('/workingSet', dbPost.addWorkingSet);
app.post('/workouts', dbPost.addWorkouts);
app.post('/users', dbPost.addUsers);


app.listen(port , () => {
    console.log(`App running on port ${port}`);
});



