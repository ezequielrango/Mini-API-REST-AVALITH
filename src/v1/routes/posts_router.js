const express = require('express');
const router = express.Router();
const postController = require('../../controllers/posts_controller');

router.get('/', postController.getAll);
router.get('/:id', postController.getById);
    module.exports = router;