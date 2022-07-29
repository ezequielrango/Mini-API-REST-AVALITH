const userService = require('../services/users_service');

const getAllUser = (req, res) => {
    try {
        const allUsers = userService.getAllUser();
        res.status(200).json({status : 'ok', data: allUsers})
    } catch (err) {
        res.status(500).json('Internal server error')
    };
};

const getByIdUser = async (req,res) => {
    try {
        const {id} =  req.params;
        const user = await userService.getByIdUser(id);
            res.status(200).json(user);
            
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    };
};

const createUser = async (req,res) => {
    try {
        const {name , age, email, country} = req.body;

        if (!name || !age || !email || !country ) {
            res.status(400).json({
                status : 400,
                msgError: 'You must fill all the fields'
            })
        }else{
            const newUser = {
                name,
                age,
                email,
                country
            };
            const createdUser = await userService.createUser(newUser);
            res.status(201).json(createdUser );
        }
    } catch (err) {
        res.status(500).json('Internal server error')
    };
};

const updateUser = (req,res) => {
    try {
        const {id} = req.params;
        const {name , age, email, country} = req.body;
        // servicio para actualizar
        res.status(201).json('updated')
    } catch (err) {
        res.status(500).json('Internal server error')
    };
};

const deleteUser = (req,res) => {
    try {
        const {id} = req.params; 
        // servicio para eliminar
        res.status(200).json('updated')
    } catch (err) {
        res.status(500).json('Internal server error')
    }
}




module.exports = {
    getAllUser,
    getByIdUser,
    createUser,
    updateUser,
    deleteUser
}