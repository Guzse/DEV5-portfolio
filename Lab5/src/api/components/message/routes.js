const { Router } = require("express");
const { MessageController } = require("./controller");

class MessageRoutes {
    controller = new MessageController();
    router = Router();

    constructor() {
        this.initRoutes();
    }

    initRoutes() {
        this.router.get("/", () => {
            throw new Error("Not implemented");
        });
    }
}

module.exports = {
    MessageRoutes,
};
