let express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () =>
    console.log(`NodeJS Demo is listening on 127.0.0.1:${port}`)
);
