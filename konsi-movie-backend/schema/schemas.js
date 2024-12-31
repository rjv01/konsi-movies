 const mongoose = require('mongoose');

 //schema
 const movieSchema = new mongoose.Schema({
    name:{ 
        type: String,
        required: true 
    },
    director:{
        type:String,
        required:true,
    },
    review:{
        type:String,
        required:true,
    },
    rating:{
        type:String,
        required:true,
    },
    genre:{
        type:String,
        required:true,

    },
    about:{
        type:String,
        required:true,
    },
    urview:{
        type:String,
        required:true,
    },
    reports:{ 
        type: Number,
        default: 0 
    }, // Track reports
},{timestamps:true});
const Movie=mongoose.model("Movie",movieSchema);

module.exports = Movie;