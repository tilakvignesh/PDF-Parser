require('dotenv').config();

const GEMINI_KEY = process.env.GEMINI_KEY;
const MONGO_URI = process.env.MONGO_URI;

module.exports = { GEMINI_KEY, MONGO_URI };