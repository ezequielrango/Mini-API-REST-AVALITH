const User = require('../database/User');

const getAllUser = (req ,res) => {
    try {
        const allUsers = User.getAllUser();
        return allUsers;
    } catch (err) {
        console.log(err);
    };
};

const getByIdUser = (id) => {
    try {
        const user = User.getByIdUser(Number(id)); // parseo a entero porque Prisma no lo puede recibir como string
        return user;
    } catch (err) {
        console.log(err);
    };
};

const createUser = (newUser) => {
    try {
        const createdUser = User.createUser(newUser);
        return createdUser;
    } catch (err) {
        console.log(err);
    };
};

const updateUser = (id,dataUser) => {
    try {
        const updatedUser = User.updateUser(Number(id),dataUser);
        return updatedUser;
    } catch (err) {
        console.log(err);
    };
};

const deleteUser = (id) => {
    try {
        const deletedUser = User.deleteUser(Number(id));
        return deletedUser;
    } catch (err) {
        console.log(err);
    };
};

module.exports = {
    getAllUser,
    getByIdUser,
    createUser,
    updateUser,
    deleteUser
}