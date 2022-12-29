const Joi = require('joi');

const taskValidSchema = Joi.object({
    title: Joi.string()
        .min(3)
        .max(225)
        .required(),

    description: Joi.string()
        .min(10)
        .required(),

    estimatedTime: Joi.number()
        .min(1)
        .required(),

    createdBy: Joi.string()
        .required(),

});

const updateTaskValidSchema = Joi.object({
    estimatedTime: Joi.number()
        .min(1)
        .required(),
});

module.exports = {
    taskValidSchema,
    updateTaskValidSchema,
};
