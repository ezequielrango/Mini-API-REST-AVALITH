const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient;

const getAll = async (req,res) => {
    try {
        const categories = await prisma.category.findMany();
        return categories;
    } catch (error) {
        console.log(error);
    }
}

const getById = async (id) => {
    try {
        const category = await prisma.category.findUniqueOrThrow({
            where : {id}
        })
        return category;
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    getAll,
    getById
}