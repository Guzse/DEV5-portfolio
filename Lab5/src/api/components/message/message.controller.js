const Message = require('./message.model');

class MessageController {
    getMessages(req, res) {
        const data = Message.find({}, (error, data) => {
            if (error) {
                res.status(500).send(error);
            }
            else {
                res.status(200).json(data);
            }
        });
    }
    async createMessage(req, res) {
        const data = new Message({
            user: req.body.user,
            message: req.body.message
        });
        try {
            const savedData = await data.save();
            res.status(200).json(savedData);
        }
        catch (error) {
            res.status(500).send(error);
        }
    }
}

module.exports = {
    MessageController
};