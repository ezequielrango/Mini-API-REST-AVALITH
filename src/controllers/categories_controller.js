const categoryService = require('../services/categories_service');

const getAll = async ( req, res ) => {
    try {
        const categories = await categoryService.getAll();
        if (!categories || categories.lenght === 0) {
            res.status(404).json({
                msg: 'Not found o doesnt exist',
                status : 404
            })
        }    
        res.status(200).json({
            data : categories,
            status : (200)
        })
    } catch (error) {
        res.status(500)
    }
}

const getById = async (req,res ) => {
    try {
        const {id} = req.params;
        const category = await categoryService.getById(id);
        if (!category) {
            res.status(404).json({
                msg: 'Not found o doesnt exist',
                status : 404
            })
        }
        res.status(200).json({
            data : category,
            status : (200)
        })
    } catch (error) {
        res.status(500).json('Internal server error')
    }
}

module.exports = {
    getAll,
    getById
}