const mongoose = require('mongoose');

const taskShema = new mongoose.Schema({
    assignee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    estimatedTime: {
        type: Number,
        required: true,
    },
    createdBy: {
        type: String,
        required: true,
    },
});

const taskModel = mongoose.model('Task', taskShema);

module.exports = {
    taskModel,
    taskShema,
};
 