const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
    topic_id: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const MessageModel = mongoose.model('message', messageSchema);

module.exports = MessageModel;
