const express = require('express');
const router = express.Router();
const categoryController = require('../../controllers/categories_controller.js');

router.get('/', (req,res) => {
        res.json('OK')
    })
router.get('/:id', (req,res) => {
        res.json('Id OK')
    })
router.post('/', (req,res) => {
        res.json('post OK')
    })
router.delete('/:id', (req,res) => {
        res.json('delete ok')
    })

module.exports = router;