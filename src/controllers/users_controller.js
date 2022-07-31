const userService = require('../services/users_service');

const getAllUser = async (req, res) => {
    try {
        const allUsers = await userService.getAllUser();
        res.status(200).json({status : 'ok', data: allUsers})
    } catch (err) {
        res.status(500).json('Internal server error')
    };
};

const getByIdUser = async (req,res) => {
    try {
        const {id} =  req.params;
        const user = await userService.getByIdUser(id);
        if (!user) {
            res.status(404).json({
                status : 404,
                msg: 'Resource Not found or doesnt exists'
            });    
        }
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

const updateUser = async (req ,res ) => {
    try {
        const {id} = req.params;
        const {name , age, email, country} = req.body;
        if (!name || !age || !email || !country) {
            res.status(400).json({
                status : 400,
                msg: 'You must fill all the fields'
            });            
        }else{
            const dataUser = {
                name,
                age,
                email,
                country  
            }
            const updatedUser = userService.updateUser(id,dataUser)
            res.status(201).json({ data : updatedUser })
        }
    } catch (err) {
        res.status(500).json('Internal server error')
    }
}

const deleteUser = async (req,res) => {
    try {
        const {id} = req.params; 
        const deletedUser = await userService.deleteUser(id)
            res.status(201).json({
                status : 201,
                msg : 'Deleted successfully'
            });
    } catch (err) {
        console.log(err);
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