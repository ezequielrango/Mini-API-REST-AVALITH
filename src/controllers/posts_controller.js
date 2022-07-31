const postServices = require('../services/posts_service');


const getAll = async (req ,res) => {
    const allPosts = await postServices.allPosts();
    try {
        if (allPosts.length === 0) {
            res.status(404).json({
                status : 404,
                msg : 'Not found o doesnt exists'
            });
        }else{
            res.status(200).json({
                status : 200,
                data : allPosts
            });
        }; 
    } catch (err) {
        res.status(500).json('Internal Server Error');
    };
};

module.exports = {
    getAll,
}