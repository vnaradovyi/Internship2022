const bcrypt = require('bcryptjs');

const Users = require('./model');

async function findAllUsers() {
    const allUsers = await Users.userModel.find();

    return allUsers;
};

async function createUser(newUser) {
    // newUser.password = bcrypt.hashSync(newUser.password, 3);
    // const user = await Users.userModel.create(newUser);
    const user = new Users.userModel(newUser);

    await user.save();

    return user;
};

async function deleteUser(email) {
    const delUser = await Users.userModel.deleteOne({ email });

    return delUser;
};

async function putUser(email, newData) {
    // newData.password = bcrypt.hashSync(newData.password, 3);
    const user = await Users.userModel.findOneAndReplace({ email }, newData);

    return user;
};

async function patchUser(email,newData) {
    // if ('password' in newData) {
    //     newData.password = bcrypt.hashSync(newData.password, 3);
    // };

    const user = await Users.userModel.findOneAndUpdate({ email }, newData);

    return user;
};

module.exports = {
    findAllUsers,
    createUser,
    deleteUser,
    putUser,
    patchUser,
};
