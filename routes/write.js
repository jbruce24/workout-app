const express = require('express'); 
const bodyParser = require('body-parser');
const app = express();
const pool = require('./db.js');

const addMovement = (request, response) => {
    console.log(request.body);
    
    const {Name,Function} = request.body;

    pool.query('INSERT INTO "Movement" ("Name","Function") VALUES ($1, $2)', ["Name", "Function"], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(201).json(results.rows);
    });
};

module.exports = {addMovement};
