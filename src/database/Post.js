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

const getById = async (id) => {
    try {
        const getPost = await prisma.post.findUnique({
            where : {id}
        });
        return getPost;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAll,
    getById
};