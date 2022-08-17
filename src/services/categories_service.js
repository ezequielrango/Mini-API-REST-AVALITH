const Category = require('../database/Category');

const getAll = (req,res) => {
    const categories = Category.getAll();
    return categories;
}

module.exports = {
    getAll
}