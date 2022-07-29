const User = require('../database/User');

const getAllUser = (req ,res) => {
    try {
        const allUsers = User.getAllUser();
        return allUsers;
    } catch (err) {
        res.status(500).json('internal Server Error');
    };
};

const getByIdUser = (id) => {
    try {
        const user = User.getByIdUser(Number(id)); // parseo a entero porque Prisma no lo puede recibir como string
        return user;
    } catch (err) {
        res.status(500).json('internal Server Error SERVICE');
    };
};

const createUser = (newUser) => {
    try {
        const createdUser = User.createUser(newUser);
        return createdUser;
    } catch (err) {
        res.status(500).json('internal Server Error');  
    };
};

const updateUser = (id,updateData) => {
    try {
        const updatedUser = User.updateUser(Number(id),updateData);
        return updatedUser;
    } catch (err) {
        res.status(500).json('Internal Server Error');
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