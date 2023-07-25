const express = require("express");
const app = express();
const { mongoose } = require("./config-db.js")
// const cors = require("cors");

// app.use(cors());

// MiddleWare
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.append("Access-Control-Allow-Origin", ["*"]);
    res.append("Access-Control-Allow-Methods", ["GET,POST,PUT,PATCH,DELETE"]);
    res.append("Access-Control-Allow-Headers", ["Content-Type"]);
    next();
})

// Routers
const routerCountries = require("./routers/countries.js");
app.use("/api/db-countries/countries", routerCountries);

app.get("/", (req, res) => {
    res.send("my server");
});

// app.get("/api/db-countries", (req, res) => {
//     res.send(JSON.stringify(infoCursos));
// });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is listened on Port: ${PORT}`);
});