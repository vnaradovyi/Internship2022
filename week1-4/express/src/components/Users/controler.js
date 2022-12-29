const Users = require('./service');

async function findAllUsers(req, res) {
    try {
        const allUsers = await Users.findAllUsers();

        return res.status(200).json({
            data: allUsers,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: 'Can not find users. Error on server!',
        });
    }
};

async function createUser(req, res) {
    try {
        const newUser = req.body;
        const createdUser = await Users.createUser(newUser);

        return res.status(200).json({
            data: createdUser,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: 'Can not created user. Error on server!',
        });
    }
};

async function deleteUserByEmail(req,res) {
    try {
        const { email } = req.params;
        const deleteUser = await Users.deleteUser(email);

        return res.status(200).json({
            data: deleteUser,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: 'Can not delete user. Error on server!',
        });
    }
};

async function putUserByEmail(req,res) {
    try {
        const { email } = req.params;
        const newData = req.body;
        const updateUser = await Users.putUser(email,newData);

        return res.status(200).json({
            data: updateUser,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: 'Can not update user. Error on server!',
        });
    }
};

async function patchUserByEmail(req,res) {
    try {
        const { email } = req.params;
        const newData = req.body;
        const updateUser = await Users.patchUser(email,newData);

        return res.status(200).json({
            data: updateUser,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: 'Can not update user. Error on server!',
        });
    }
};

module.exports = {
    findAllUsers,
    createUser,
    deleteUserByEmail,
    putUserByEmail,
    patchUserByEmail,
};
