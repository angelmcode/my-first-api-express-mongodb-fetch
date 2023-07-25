const express = require("express");
const Countries = require("../models-db/countries-db.js");

const routerCountries = express.Router();

// MiddleWare
routerCountries.use(express.json());

// Get
routerCountries.get("/", (req, res) => {
    Countries.find().then((countries) => {
        res.send(JSON.stringify(countries));
    })
});

// Post
routerCountries.post("/", (req, res) => {
    let { country, lenguage, population, capital } = req.body;
    let newCountry = new Countries({country, lenguage, population, capital})
    newCountry.save().catch((err) => console.log(err));
    Countries.find().then((countries) => {
        console.log(countries)
        res.send(JSON.stringify(countries));
    })
    console.log(newCountry)
});

// Put
routerCountries.put("/:id", async (req, res) => {
    let { country, lenguage, population, capital } = req.body;
    let newCountry = {country, lenguage, population, capital};
    console.log(newCountry);
    console.log(typeof req.params.id);
    await Countries.findByIdAndUpdate(req.params.id, newCountry).catch((err) => console.log(err));
    Countries.find().then((countries) => {
        res.send(JSON.stringify(countries));
    })
});

// Patch
routerCountries.patch("/:id", async (req, res) => {
    let { country, lenguage, population, capital } = req.body;
    console.log(country);
    let newCountry = {country, lenguage, population, capital};
    console.log(req.params.id);
    await Countries.findByIdAndUpdate(req.params.id, newCountry).catch((err) => console.log(err));
    Countries.find().then((countries) => {
        res.send(JSON.stringify(countries));
    })
});

// Delete
routerCountries.delete("/:id", async (req, res) => {
    console.log(req.params.id);
    await Countries.findByIdAndDelete(req.params.id).catch((err) => console.log(err));
    Countries.find().then((countries) => {
        res.send(JSON.stringify(countries));
    })
});

module.exports = routerCountries;