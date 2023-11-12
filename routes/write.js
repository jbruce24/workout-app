const express = require('express'); 
const bodyParser = require('body-parser');
const app = express();
const pool = require('./db.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
    {
        extended:true,
    }
));

const addMovement = (request, response) => {
    console.log(request.body);
    
    const { name, program } = request.query;

    pool.query('INSERT INTO "Movement" ("Name","Function") VALUES ($1, $2)', [name, program], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(201).send('User added with ID: ${results.rows[0]["id"]}');
    });
};

module.exports = {addMovement};
