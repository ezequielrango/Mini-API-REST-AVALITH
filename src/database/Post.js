const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAll = async(req, res) => {
    try {
        const allPosts = await prisma.post.findMany();
        return allPosts;
    } catch (err) {
        console.log(err);
    };
};

module.exports = {
    getAll
};