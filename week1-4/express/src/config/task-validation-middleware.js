const taskValidation = require('../components/Task/validation-schema');

async function taskDataValidation(req, res, next) {
    const { error, value } = taskValidation.taskValidSchema.validate(req.body);

    if (error) {
        return res.status(400).json({
            error: error.message,
            details: 'Body of request is not valid',
        });
    }

    return next();
};

async function updateTaskDataValidation(req, res, next) {
    const { error, value } = taskValidation.updateTaskValidSchema.validate(req.body);

    if (error) {
        return res.status(400).json({
            error: error.message,
            details: 'Body of request is not valid',
        });
    }

    return next();
};

module.exports = {
    taskDataValidation,
    updateTaskDataValidation,
};
