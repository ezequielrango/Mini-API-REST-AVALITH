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

module.exports = {
    getAll
}