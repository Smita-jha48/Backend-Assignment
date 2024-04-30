const router = require('express').Router();
const {authenticate} = require('../middlewares/authenticate');
const {feedController} = require('../controllers');

router.route('/posts')
    .get(authenticate, feedController.fetchPost)

module.exports = router;