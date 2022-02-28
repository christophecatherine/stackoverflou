const Message = require('../models/message.model');

module.exports.createMessage = (req, res) => {
  const topic_id = req.params.topicId;
  const { content, user_id } = req.body;

  const message = new Message({
    content,
    user_id,
    topic_id,
  });

  message
    .save()
    .then(() => res.status(200).json({ message: 'Message enregistré' }))
    .catch((err) => res.status(500).json({ error: err.message }));
};

module.exports.getMessageByTopic = (req, res) => {
  const topic_id = req.params.topicId;

  Message.find({ topic_id })
    .then((message) => res.status(200).json(message))
    .catch((err) => res.status(500).json({ error: err.message }));
};

module.exports.updateMessage = (req, res) => {
  const id = req.params.messageId;

  const message = req.body;

  Message.updateOne({ _id: id }, { ...message, _id: id })
    .then(() => res.status(200).json({ message: 'Message modifié' }))
    .catch((err) => res.status(500).json({ error: err.message }));
};

module.exports.deleteMessage = (req, res) => {
  const id = req.params.messageId;

  Message.deleteOne({ _id: id })
    .then(() => res.status(200).json({ message: 'Message supprimé !' }))
    .catch((err) => res.status(500).json({ error: err.message }));
};
