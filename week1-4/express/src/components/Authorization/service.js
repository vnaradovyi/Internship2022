const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs');

const Users = require('../Users/model');

const SECRET_KEY = 'dfjghopfi940358jgkg';

async function createToken(email, password) {
    const candidate = await Users.userModel.findOne({ email });

    if (candidate) {
        const checkPassword = bcrypt.compareSync(password, candidate.password);

        if (checkPassword) {
            const idUser = candidate.id;
            const payload = { idUser };

            const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '50m' });

            return token;
        };

        return {
            message: 'Password is wrong'
        }
    };

    return { message: 'User is not found' };
};

async function verifyToken(token) {
    const decoded = jwt.verify(token, SECRET_KEY);

    if (!decoded) {
        return { message: 'Bad, very bad token!!!' };
    }

    return decoded;
};

module.exports = {
    createToken,
    verifyToken,
};
