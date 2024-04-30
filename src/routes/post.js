
const router = require('express').Router();
const {authenticate} = require('../middlewares/authenticate');
const {postController} = require('../controllers');

router.route('/create')
      .post(authenticate, postController.createPost);

router.route('/read')
        .get(authenticate, postController.readPost);

router.route('/update')
        .put(authenticate, postController.updatePost);

router.route('/delete')
        .delete(authenticate, postController.deletePost);

router.route('/like')
        .post(authenticate, postController.likePost);

router.route('/unlike')
        .post(authenticate, postController.unlikePost);




module.exports = router;