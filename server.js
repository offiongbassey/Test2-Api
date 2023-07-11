const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path  = require("path");
require("dotenv").config({path: path.resolve(__dirname, './env')});

const app = express();

app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true
}));

app.use('/', (req, res) => {
    res.send("Backend Successfully Connected");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT);