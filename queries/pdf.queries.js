const mongoose = require('mongoose');   
const DataModel = require('../Models/data.model');

async function saveExtractedData(extractedData) {
    try {
        return await DataModel.create(extractedData);
    } catch (error) {
        console.error(error);
        throw new Error('Error saving extracted data');
    }
}

module.exports = { saveExtractedData };