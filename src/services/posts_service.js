const Post = require('../database/Post');


const getAll = (req ,res) => {
    try {
        const allPosts = Post.allPosts();
        return allPosts;
    } catch (err) {
        console.log(err);
    };
};

module.exports = {
    getAll,
}