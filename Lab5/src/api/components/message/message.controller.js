class MessageController {
    getMessages(req, res) {
        res.send("GET Messages");
    }
    createMessage(req, res) {
        res.send("POST Message");
    }
}

module.exports = {
    MessageController
};