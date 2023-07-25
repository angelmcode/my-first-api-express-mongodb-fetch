const mongoose = require("mongoose");

const { Schema } = mongoose;

const countriesSchema = new Schema({
    country: { type: String, required: true },
    lenguage: { type: String, required: true },
    population: { type: String, required: false },
    capital: { type: String, required: false }
});

module.exports = mongoose.model("Countries", countriesSchema);