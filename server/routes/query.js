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
    pool.query('SELECT * FROM "Workouts"', (error, results)=>{
        if(error){
            throw error;
        };
        response.status(200).json(results.rows);
    });
};

module.exports = {getUsers, getMovements,getProgram,getWorkingSet, getWorkoutType, getWorkouts};

//module.exports = {getWorkouts};