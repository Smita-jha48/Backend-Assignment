const router = require('express').Router();
const postRoutes = require('./post');
const feedRoutes = require('./feed');

router.use('/post', postRoutes);
router.use('/feed', feedRoutes);

module.exports = router;