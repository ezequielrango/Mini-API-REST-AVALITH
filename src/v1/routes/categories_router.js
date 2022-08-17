const express = require('express');
const router = express.Router();
const categoryController = require('../../controllers/categories_controller.js');

router.get('/',categoryController.getAll )
router.get('/:id',categoryController.getById)
// router.post('/', (req,res) => {
//         res.json('post OK')
//     })
// router.delete('/:id', (req,res) => {
//         res.json('delete ok')
//     })

module.exports = router;