const express = require("express");
const mongoose = require("mongoose");

if (process.env.NODE_ENV == "production") {
    console.log("%cProduction environment detected", "color: green");
}
else {
    require("dotenv").config();
    console.log("%cDevelopment environment detected", "color: green");
}
if (!process.env.MONGO_URI) {
    console.error("ERROR: MONGO_URI not set");
}

// Set up mongoose
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
let database = mongoose.connection;

database.on('error', console.error.bind(console, 'connection error:'));
database.once('connected', () => {
    console.log("%cConnected to the database", "color: green");
});

const { initiateRouter } = require("./src/api/routes");
const app = express();
const port = 3000;

app.use(express.json());

initiateRouter(app);

app.listen(port, () =>
    console.log(`NodeJS Demo is listening on 127.0.0.1:${port}`)
);
