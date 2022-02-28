const router = require('express').Router();
const messageCtrl = require('../controllers/message.ctrl');
const auth = require('../middleware/auth');


router.post('/:topicId', auth, messageCtrl.createMessage);
router.get('/:topicId', auth, messageCtrl.getMessageByTopic);
router.put('/:messageId', auth, messageCtrl.updateMessage);
router.delete('/:messageId', auth, messageCtrl.deleteMessage);

module.exports = router;
