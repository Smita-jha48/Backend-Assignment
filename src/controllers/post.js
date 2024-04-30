const {CustomError} = require('../middlewares/CustomError')
const {postService} = require('../services')
const createPost = async(req, res)=>{
    const { title, description } = req.body;
    const { userId } = req.user;
    try{
        const postData = await postService.createPost({title, description, userId});
        return res.status(200).json({
            message: 'Post created successfully',
            data: postData
        })
    }
    catch(error){
        if(error instanceof CustomError){
            return res.status(error.status).json({message: error.message});
        }
        return res.status(500).json({message: error.message});
    }
}

const readPost = async(req,res) => {
    const { userId } = req.user;
    try{
        const postData = await postService.readPost({userId});
        return res.status(200).json({
            message: 'Post read successfully',
            data: postData
        })
    }
    catch(error){
        if(error instanceof CustomError){
            return res.status(error.status).json({message: error.message});
        }
        return res.status(500).json({message: error.message});
    }
}
const updatePost = async(req,res) => {
    const {id, title, description } = req.body;
    const { userId } = req.user;
    try{
        const postData = await postService.updatePost({id, title, description, userId});
        return res.status(200).json({
            message: 'Post updated successfully',
            data: postData
        })
    }
    catch(error){
        if(error instanceof CustomError){
            return res.status(error.status).json({message: error.message});
        }
        return res.status(500).json({message: error.message});
    }
}

const deletePost = async(req,res) => {
    const {_id} = req.body;
    const { userId } = req.user;
    try{
        const postData = await postService.deletePost({_id, userId});
        return res.status(200).json({
            message: 'Post deleted successfully',
            data: postData
        })
    }
    catch(error){
        if(error instanceof CustomError){
            return res.status(error.status).json({message: error.message});
        }
        return res.status(500).json({message: error.message});
    }
}

const likePost = async(req,res) => {
    const {_id} = req.body;
    const { userId } = req.user;
    try{
        const postData = await postService.likePost({_id, userId});
        return res.status(200).json({
            message: 'Post liked successfully',
            data: postData
        })
    }
    catch(error){
        if(error instanceof CustomError){
            return res.status(error.status).json({message: error.message});
        }
        return res.status(500).json({message: error.message});
    }
}

const unlikePost = async(req,res) => {
    const {_id} = req.body;
    const { userId } = req.user;
    try{
        const postData = await postService.unlikePost({_id, userId});
        return res.status(200).json({
            message: 'Post unliked successfully',
            data: postData
        })
    }
    catch(error){
        if(error instanceof CustomError){
            return res.status(error.status).json({message: error.message});
        }
        return res.status(500).json({message: error.message});
    }
}

module.exports = {createPost, readPost, updatePost, deletePost, likePost, unlikePost};