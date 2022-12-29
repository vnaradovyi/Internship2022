const userValidationSchema = require('../components/Users/validation-schema');

async function userDataValidation(req, res, next) {
    const { error, value } = userValidationSchema.userValidSchema.validate(req.body);

    if (error) {
        return res.status(400).json({
            error: error.message,
            details: 'Body of request is not valid',
        });
    }

    return next();
};

async function userEmailValidation(req, res, next) {
    const { error, value } = userValidationSchema.emailValidSchema.validate(req.params);

    if (error) {
        return res.status(400).json({
            error: error.message,
            details: 'Parameters of request is not valid',
        });
    }

    return next();
};

async function updateUserDataValidation(req, res, next) {
    const { error, value } = userValidationSchema.updateUserValidSchema.validate(req.body);

    if (error) {
        return res.status(400).json({
            error: error.message,
            details: 'Body of patch request is not valid',
        });
    }

    return next();
};

async function signInUserDataValidation(req, res, next) {
    const { error, value } = userValidationSchema.signInUserValidSchema.validate(req.body);

    if (error) {
        return res.status(400).json({
            error: error.message,
            details: 'Body of sign-in request is not valid',
        });
    }

    return next();
};

module.exports = {
    userDataValidation,
    userEmailValidation,
    updateUserDataValidation,
    signInUserDataValidation,
};
