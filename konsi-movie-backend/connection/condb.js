const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Use the MongoDB URI from environment variables (fallback to localhost if not provided)
const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/konsi-movie';

const connectToDatabase = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected successfully');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
};

// Establish the connection
connectToDatabase();
