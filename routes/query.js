const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const pool = require('./db.js')

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results)=>{
        if(error){
            throw error;
        };
        response.status(200).json(results.rows);
    });
};

module.exports = {getUsers};