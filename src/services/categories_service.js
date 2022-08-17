const Category = require('../database/Category');

const getAll = (req,res) => {
    try {
        const categories = Category.getAll();
        return categories;
    } catch (error) {
        console.log(error);   
    }
}

const getById = (id) => {
    try {
        const category = Category.getById(Number(id));
        return category;   
    } catch (error) {
        console.log(error);   
    }
}

const create = (newCategory) => {
    try {
        const createdCategory = Category.create(newCategory);
        return createdCategory;
    } catch (error) {
        console.log(error);
    }
} 
module.exports = {
    getAll,
    getById,
    create
}