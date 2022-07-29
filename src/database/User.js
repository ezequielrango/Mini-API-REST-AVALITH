const { PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const getAllUser = async (req,res) => {
    try {
        const allUsers = await prisma.user.findMany();
        return allUsers;    
    } catch (err) {
        res.status(500).json('Internal Server Error')
    }

};

const getByIdUser = async (id) => {
    try {
        const user = await prisma.user.findUniqueOrThrow({
            where: {
                id : id
            }
        })
        console.log(typeof id);
        return user;
    } catch (err) {
        console.log(err);
    }
}

const createUser = async (newUser) => {
    try {
        const createNewUser = await prisma.user.create({
            data : newUser,                       
        });
        console.log(newUser);
        return createNewUser;
    } catch (err) {
        res.status(500).json('Internal Server Error')
    }
}
module.exports = {
    getAllUser,
    getByIdUser,
    createUser
};