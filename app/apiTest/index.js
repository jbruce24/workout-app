const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port= 4000;
const db = require('./query.js');

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

app.listen(port , () => {
    console.log(`App running on port ${port}`);
});



