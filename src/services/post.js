const { ObjectId } = require('mongodb');
const {getCollection} = require('../utils/dbCon')

const createPost = async({title, description, userId})=>{
    try {
       const post = await getCollection('posts');
       const postData = await post.insertOne({title, description,userId: new ObjectId(userId)});
       return {
           post: postData
       };

    }
    catch(error){
        throw error;
    }
}
const readPost = async({userId})=>{
    try{
        const post = await getCollection('posts');
        const postData = await post.find({userId: new ObjectId(userId)}).toArray();
        return postData;
    }
    catch(error){
        throw error;
    }
}

const updatePost = async({id, userId, title, description})=>{
    try{
        const post = await getCollection('posts');
        const postData = await post.updateOne({_id: new ObjectId(id)}, {$set: {title, description}});
        return postData;
    }
    catch(error){
        throw error;
    }
}

const deletePost = async({_id, userId})=>{
    try{
        const post = await getCollection('posts');
        const postData = await post.deleteOne({_id: new ObjectId(_id)});
        return postData;
    }
    catch(error){
        throw error;
    }
}

const likePost = async({_id, userId})=>{
    try{
        const like = await getCollection('likes');
        const likeData = await like.insertOne({postId: new ObjectId(_id), userId: new ObjectId(userId)});
        return likeData;
    }
    catch(error){
        throw error;
    }
}
const unlikePost = async({_id, userId})=>{
    try{
        const like = await getCollection('likes');
        const likeData = await like.deleteOne({postId: new ObjectId(_id), userId: new ObjectId(userId)});
       
        return likeData;
    }
    catch(error){
        throw error;
    }
}
module.exports = {createPost, readPost, updatePost, deletePost, likePost, unlikePost};