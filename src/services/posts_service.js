const Post = require('../database/Post');


const getAll = (req ,res) => {
    try {
        const allPosts = Post.getAll();
        return allPosts;
    } catch (err) {
        console.log(err);
    };
};

const getById = (id) => {
    try {
        const getPost = Post.getById(Number(id))
        return getPost;
    } catch (error) {
        console.log(error);
    }
};

const create = (newUser) => {
    try {
        const createPost = Post.create(newUser);
        return createPost
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    getAll,
    getById,
    create
}