const userModel = require('../model/userModel');

    // CREATE USERS
const createUser = async (req, res) => {
    try{
        const { name, regNumber, email } = req.body;
        const user = await userModel.create({ name, regNumber, email });
        return res.status(201).json({
            message: 'User created successfully',
            data: user,
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

//SINGLE GET USER
const getSingleUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const getSingle = await userModel.findById(userId);
        if (!getSingle) {
            return res.status(404).json({
                message: 'User not found'
            });
        }
        return res.status(200).json({
            message: 'User fetched successfully',
            data: getSingle
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

//UPDATE USER
const updateUser = async (req, res) => {
    try {
        const { userId} = req.params;
        const { name } = req.body;
        const update = await userModel.findByIdAndUpdate(
            userId,
            { name },
            { new: true},
        )
        if (!update) {
            return res.status(404).json({
                message: 'User not found'
            });
        }
        return res.status(200).json({
            message: 'User updated successfully',
            data: update
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

//DELETE USER
const deleteUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const deleteUser = await userModel.findByIdAndDelete(userId);
        if (!deleteUser) {
            return res.status(404).json({
                message: 'User not found'
            });
        }
        return res.status(200).json({
            message: 'User deleted successfully'
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    createUser,
    getSingleUser,
    updateUser,
    deleteUser
};