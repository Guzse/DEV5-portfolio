const Message = require("./message.model");

class MessageController {
    getMessageByID(req, res) {
        Message.findById(req.params.id, (error, data) => {
            if (error) {
                res.status(500).send(error);
            } else {
                res.status(200).json(data);
            }
        });
    }
    getMessages(req, res) {
        Message.find(req.query, (error, data) => {
            if (error) {
                res.status(500).send(error);
            } else {
                res.status(200).json(data);
            }
        });
    }
    async createMessage(req, res) {
        try {
            const data = new Message({
                user: req.body.user,
                message: req.body.message,
            });
            const savedData = await data.save();
            res.status(200).json(savedData);
        } catch (error) {
            res.status(500).send(error);
        }
    }
    async updateMessage(req, res) {
        try {
            const id = req.params.id;
            const data = req.body;
            const options = { new: true };
            const updatedData = await Message.findByIdAndUpdate(id, data, options);
            res.status(200).json(updatedData);
        } catch (error) {
            res.status(500).send(error);
        }
    }
    async deleteMessage(req, res) {
        try {
            const id = req.params.id;
            const deletedData = await Message.findByIdAndDelete(id);
            res.status(200).json(deletedData);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

module.exports = {
    MessageController,
};
