const express = require("express");
const mongoose = require("mongoose");

if (process.env.NODE_ENV == "production") {
    console.log("%cProduction environment detected", "color: green");
}
else {
    require("dotenv").config();
    console.log("%cDevelopment environment detected", "color: green");
}

if (process.env.MONGO_URI) {

}
else {
    console.error("ERROR: MONGO_URI not set");
}

const { initiateRouter } = require("./src/api/routes");
const app = express();
const port = 3000;

app.use(express.json());

initiateRouter(app);

app.listen(port, () =>
    console.log(`NodeJS Demo is listening on 127.0.0.1:${port}`)
);
