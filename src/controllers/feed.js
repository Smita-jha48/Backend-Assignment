const {feedService} = require('../services');
const {CustomError} = require('../middlewares/CustomError')

const fetchPost = async (req, res) => {
    const { userId } = req.user;
    try {
        const postData = await feedService.fetchPost({ userId });
        return res.status(200).json({
            message: 'Posts fetched successfully',
            data: postData
        });
    }
    catch (error) {
        if (error instanceof CustomError) {
            return res.status(error.status).json({ message: error.message });
        }
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {fetchPost}