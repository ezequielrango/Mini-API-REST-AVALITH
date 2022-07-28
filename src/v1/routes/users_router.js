const express = require('express');
const router = express.Router();
const userController = require('../../controllers/users_controller');

router  
    .get('/',userController.getAllUser)
    .get('/:id',userController.getByIdUser)
    .post('/',userController.createUser)
    .put('/:id',userController.updateUser)
    .delete('/:id',userController.deleteUser)

module.exports = router;