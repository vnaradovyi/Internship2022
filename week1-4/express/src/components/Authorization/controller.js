const Token = require('./service');

async function createToken(req, res) {
    try {
        const { email, password } = req.body;

        const token = await Token.createToken(email, password);

        return res.status(200).json({
            data: token,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: 'Can not create token. Error on server!',
        });
    }
};

async function verifyToken(req, res) {
    try {
        const token = req.headers['access-token'];

        const verify = await Token.verifyToken(token);

        return res.status(200).json({
            data: verify,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: 'Can not verify token. Error on server!',
        });
    }
};

module.exports = {
    createToken,
    verifyToken,
};
