const router = require('express').Router();
const topicCtrl = require('../controllers/topic.ctrl');
const auth = require('../middleware/auth');

router.post('/create', auth, topicCtrl.createTopic);
router.get('/', auth, topicCtrl.getAllTopic);
router.get('/:id', auth, topicCtrl.getOneTopic);
router.put('/:id', auth, topicCtrl.updateTopic);
router.delete('/:id', auth, topicCtrl.deleteTopic);

module.exports = router;
