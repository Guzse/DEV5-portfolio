let express = require("express");
const { initiateRouter } = require("./src/api/routes");
const app = express();
const port = 3000;

app.use(express.json());

initiateRouter(app);

app.listen(port, () =>
    console.log(`NodeJS Demo is listening on 127.0.0.1:${port}`)
);
