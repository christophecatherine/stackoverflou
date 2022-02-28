const Topic = require('../models/topic.model');

module.exports.createTopic = (req, res) => {
  const { title, description, user_id } = req.body;

  const topic = new Topic({
    title,
    description,
    user_id,
  });

  topic
    .save()
    .then(() => res.status(200).json({ message: 'Topic enregistré' }))
    .catch((err) => res.status(500).json({ error: err.message }));
};

module.exports.getAllTopic = (req, res) => {
  Topic.find()
    .then((topics) => res.status(200).json(topics))
    .catch((err) => res.status(500).json({ error: err.message }));
};

module.exports.getOneTopic = (req, res) => {
  const id = req.params.id;

  Topic.findOne({ _id: id })
    .then((topic) => res.status(200).json(topic))
    .catch((err) => res.status(500).json({ error: err.message }));
};

module.exports.updateTopic = (req, res) => {
  const id = req.params.id;

  const topic = req.body;

  Topic.updateOne({ _id: id }, { ...topic, _id: id })
    .then(() => res.status(200).json({ message: 'Topic modifié' }))
    .catch((err) => res.status(500).json({ error: err.message }));
};

module.exports.deleteTopic = (req, res) => {

  const id = req.params.id

  Topic.deleteOne({_id: id})
  .then(() => res.status(200).json({message: 'Topic Supprimé !'}))
  .catch(err => res.status(500).json({error: err.message}))

};
