const mongoose = require('mongoose');
const {MONGO_URI} = require('./constants');

const connectDB = async () => {
    try {
        console.log(MONGO_URI);
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB Connected');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
