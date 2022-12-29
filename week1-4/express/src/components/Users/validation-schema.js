const Joi = require('joi');

const userValidSchema = Joi.object({
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'ua'] } })
        .required(),

    firstName : Joi.string()
        .min(3)
        .max(25)
        .required(),

    secondName: Joi.string()
        .min(3)
        .max(25),

    password: Joi.string()
        .pattern(/^[a-zA-Z0-9]{3,30}$/)
        .required(),

});

const emailValidSchema = Joi.object({
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'ua'] } })
        .required(),
});

const updateUserValidSchema = Joi.object({
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'ua'] } }),

    firstName : Joi.string()
        .min(3)
        .max(25),

    secondName: Joi.string()
        .min(3)
        .max(25),

    password: Joi.string()
        .pattern(/^[a-zA-Z0-9]{3,30}$/),

});

const signInUserValidSchema = Joi.object({
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'ua'] } })
        .required(),

    password: Joi.string()
        .pattern(/^[a-zA-Z0-9]{3,30}$/)
        .required(),

});

module.exports = {
    userValidSchema,
    emailValidSchema,
    updateUserValidSchema,
    signInUserValidSchema,
};
