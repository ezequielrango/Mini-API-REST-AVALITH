const User = require('../database/User');

const getAllUser = (req ,res) => {
    try {
        const allUsers = User.getAllUser();
        return allUsers;
    } catch (err) {
        res.status(500).json('internal Server Error');
    };
};

const getByIdUser = (req ,res) => {
    try {
        
    } catch (err) {
        
    };
};

const createUser = (newUser) => {
    try {
        const createdUser = User.createUser(newUser);
        return createdUser;
        console.log('ACAAAA');
    } catch (err) {
        res.status(500).json('internal Server Error');  
    };
};

const updateUser = (req ,res) => {
    try {
        
    } catch (err) {
        
    };
};

const deleteUser = (req ,res) => {
    try {
        
    } catch (err) {
        
    };
};

module.exports = {
    getAllUser,
    getByIdUser,
    createUser,
    updateUser,
    deleteUser
}