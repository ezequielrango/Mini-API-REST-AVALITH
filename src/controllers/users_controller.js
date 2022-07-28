const getAllUser = (req, res) => {
    try {
        res.status(200).json('ok')
    } catch (err) {
        res.status(500).json('Internal server error')
    };
};

const getByIdUser = (req,res) => {
    try {
        const {id} = req.params;
        res.status(200).json(Number(id))
    } catch (err) {
        res.status(500).json('Internal server error')
    };
};

const createUser = (req,res) => {
    try {
        const {id} = req.params;
        const {name , age, email, country} = req.body;

        if (!name || !age || !email || !country ) {
            res.status(400).json({
                status : 400,
                msgError: 'You must fill all the fields'
            })
        }else{
            res.status(201).json(`Created user: ${name}`);
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