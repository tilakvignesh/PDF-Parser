const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    name: String,
    address: String,
    dob: String,
    phone: String
});

const DataModel = mongoose.model('ExtractedData', DataSchema);

module.exports = DataModel;