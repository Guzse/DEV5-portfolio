const { Router } = require("express");
const { MessageController } = require("./message.controller");

class MessageRoutes {
    controller = new MessageController();
    router = Router();

    constructor() {
        this.initRoutes();
    }

    initRoutes() {
        this.router.get("/", this.controller.getMessages);
        this.router.post("/", this.controller.createMessage);
    }
}

module.exports = {
    MessageRoutes,
};
