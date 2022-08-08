const express = require('express');
const router = express.Router();
const usersRouter = require('../../v1/routes/users_router');
const postsRouter = require('../../v1/routes/posts_router')

router
        .use('/users', usersRouter)
        .use('/posts', postsRouter)

module.exports = router;