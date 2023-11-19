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
    
    const { name, program } = request.body;// this is named program to avoid function being a reserved word

    pool.query('INSERT INTO "Movement" ("Name","Function") VALUES ($1, $2)', [name, program], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(201).send('User added with ID: ${results.rows[0]["id"]}');
    });
};

const addProgram = (request, response) => {
    console.log(request.body);
    
    const { nameId, program, creatorFName, creatorLName } = request.body;// this is named program to avoid function being a reserved word

    pool.query('INSERT INTO "Program" ("nameId","program","creatorFName", "creatorLName") VALUES ($1, $2, $3, $4)', [nameId, program, creatorFName, creatorLName], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(201).send('User added with ID: ${results.rows[0]["id"]}');
    });
};

const addWorkingSet = (request, response) => {
    console.log(request.body);
    
    const { workoutType,workoutName,sets,reps,weight,notes,personalRecordAttempt,split1,split2,split1Notes,split2Notes,resultsDistance,resultsCalories,movementId,workoutId,id,multiSplitBool,multiSplitJSON } = request.body;// this is named program to avoid function being a reserved word

    pool.query('INSERT INTO "WorkingSet" ("workoutType","workoutName","sets","reps","weight","notes","personalRecordAttempt","split1","split2","split1Notes","split2Notes","resultsDistance","resultsCalories","movementId","workoutId","id","multiSplitBool","multiSplitJSON") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)', [workoutType,workoutName,sets,reps,weight,notes,personalRecordAttempt,split1,split2,split1Notes,split2Notes,resultsDistance,resultsCalories,movementId,workoutId,id,multiSplitBool,multiSplitJSON], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(201).send('User added with ID: ${results.rows[0]["id"]}');
    });
};





module.exports = {addMovement, addProgram, addWorkingSet};
