const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const routei = require('./routing/routei');  // Import routei.js

require('dotenv').config();
require('./connection/condb');  // MongoDB connection

const PORT = process.env.PORT || 5000;

app.use(express.json()); // Middleware to parse JSON
app.use(express.urlencoded({ extended: true })); // For parsing URL-encoded data

app.use(cors());
app.use(bodyParser.json());

//'/movies' prefix
app.use('/movies', routei);

app.get('/oko', (req, res) => {
    res.send('Konsi-Movie Backend is running raj');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


// working urls 
//GET ALL MOVIES http://localhost:3000/movies/api/all
//POST posting http://localhost:3000/movies/api/posting
//POST report http://localhost:3000/movies/api/report/${movieId}
//PUST update ​http://localhost:3000/movies/api/update/${movieID}
//DELETE delete ​http://localhost:3000/movies/api/update/${movieID}