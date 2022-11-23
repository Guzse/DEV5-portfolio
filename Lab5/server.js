let express = require("express");
const { initRestRoutes } = require("./src/api/routes");
const app = express();
const port = 3000;

app.use(express.json());

initRestRoutes(app);

app.listen(port, () =>
    console.log(`NodeJS Demo is listening on 127.0.0.1:${port}`)
);
