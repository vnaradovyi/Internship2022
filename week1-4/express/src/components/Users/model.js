const mongoose = require('mongoose');

const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        index: true,
        unique: true,
    },
    firstName: {
        type: String,
    },
    secondName: {
        type: String,
    },
    password: {
        type: String,
    },
});

userSchema.pre('save', function preSave(next) {
    const user = this;

    if (!user.isModified('password')) return next();

    const salt = bcrypt.genSaltSync(3);
    const hash = bcrypt.hashSync(user.password, salt);

    user.password = hash;

    return next();
});

const userModel = mongoose.model('Users', userSchema);

module.exports = {
    userSchema,
    userModel,
}

