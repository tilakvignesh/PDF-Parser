require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const extractRoutes = require('./routes/routes');
const setupSwagger = require('./config/swagger');


const app = express();


// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use('/v1', extractRoutes);


setupSwagger(app);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
