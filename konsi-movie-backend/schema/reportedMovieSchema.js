const mongoose = require('mongoose');

// Reported Movies Schema
const reportedMovieSchema = new mongoose.Schema({
  name:{ 
    type: String, 
    required: true 
  },
  director:{ 
    type: String,
    required: true 
  },
  review:{ 
    type: String,
    required: true
  },
  rating:{ 
    type: String,
    required: true
  },
  genre:{ 
    type: String,
    required: true
  },
  about:{ 
    type: String,
    required: true
  },
  urview:{ 
    type: String,
    required: true
  },
  reported:{
    type:Boolean,
    required:false
  },
  reportedAt:{ 
    type: Date,
    default: Date.now
  }, // Timestamp of reporting
},{timestamps:true});

const ReportedMovie = mongoose.model("ReportedMovie", reportedMovieSchema);
console.log("report schema working");
module.exports = ReportedMovie;
