const express = require('express'); 
const bodyParser = require('body-parser');
const app = express();
const pool = require('./db.js');
const cors = require('cors');

app.use(cors());

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results)=>{
        if(error){
            throw error;
        };
        response.status(200).json(results.rows);
    });
};

const getProgram = (request, response) => {
    pool.query('SELECT * FROM "Program"', (error, results)=>{
        if(error){
            throw error;
        };
        response.status(200).json(results.rows);
    });
};

const getMovements = (request, response) => {
    pool.query('SELECT * FROM "Movement"', (error, results)=>{
        if(error){
            throw error;
        };
        response.status(200).json(results.rows);
    });
};

const getMovementsId = (request, response) => {
    const id = request.params.id;
    pool.query('SELECT * FROM "Movement" where id = $1', [id], (error, results)=>{
        if(error){
            throw error;
        };
        response.status(200).json(results.rows);
    });
};

const getWorkoutType = (request, response) => {
    pool.query('SELECT * FROM "WorkoutType"', (error, results)=>{
        if(error){
            throw error;
        };
        response.status(200).json(results.rows);
    });
};

const getWorkingSet = (request, response) => {
    pool.query('SELECT * FROM "WorkingSet"', (error, results)=>{
        if(error){
            throw error;
        };
        response.status(200).json(results.rows);
    });
};

const getWorkouts = (request, response) => {
    pool.query('SELECT * FROM "Workout"', (error, results)=>{
        if(error){
            throw error;
        };
        response.status(200).json(results.rows);
    });
};

module.exports = {getUsers, getMovements, getMovementsId ,getProgram,getWorkingSet, getWorkoutType, getWorkouts};

//module.exports = {getWorkouts};