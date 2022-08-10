const postServices = require('../services/posts_service');


const getAll = async (req ,res) => {
    const allPosts = await postServices.getAll();
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
const getById = async (req,res) => {
    const {id} = req.params;
    const getPost = await postServices.getById(id);
    try {
        if (!getPost) {
            res.status(404).json({
                msg : "Resource not found or doesn´t exist",
                status : 404
            });
        }
        res.status(200).json({
            data : getPost,
            status : 200
        });
    } catch (error) {
        res.status(500).json('Internal Server Error');
    };
}
module.exports = {
    getAll,
    getById
}