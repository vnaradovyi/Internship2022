const { default: mongoose } = require('mongoose');

const { taskModel } = require('./model');

const { userModel } = require('../Users/model');

const { verifyToken } = require('../Authorization/service');

const countOfDocument = 5;

async function createNewTask(token, newTask) {
    const decoded = await verifyToken(token);

    if (decoded) {
        await taskModel.create({
            assignee: mongoose.Types.ObjectId(decoded.idUser),
            title: newTask.title,
            description: newTask.description,
            estimatedTime: newTask.estimatedTime,
            createdBy: newTask.createdBy
        });

        return 'Task was created!';
    }

    return 'Bad token';
};

async function updateEstimatedTime(idTask, newEstimatedTime) {
    const idUpdatedTask = mongoose.Types.ObjectId(idTask);

    await taskModel.findByIdAndUpdate(idUpdatedTask, newEstimatedTime);

    return 'Task was updated!';
};

async function getFirstFiveTaskForUser(page, token) {
    const decoded = await verifyToken(token);

    if (decoded) {
        const userID = mongoose.Types.ObjectId(decoded.idUser);

        const countOFTask = await taskModel.find().estimatedDocumentCount();

        const fiveTask = await taskModel.find({assignee: userID})
            .skip(page * countOfDocument)
            .limit(countOfDocument);

        return {
            tasks: fiveTask,
            totalTasks: countOFTask,
        };
    }
};

async function allTasks(token) {
    const decoded = await verifyToken(token);

    const userID = mongoose.Types.ObjectId(decoded.idUser);

    const pipeline = [
        {
            $match: {_id: userID}
        }, {
            $lookup: {
                from: 'tasks',
                localField: '_id',
                foreignField: 'assignee',
                pipeline: [
                    {
                        $sort: {estimatedTime: -1}
                    }
                ],
                as: 'userTasks',
            }
        }, {
            $project: {
                _id: 0,
                tasks: '$userTasks',
                name: {
                    $concat: ['$firstName', ' ', '$secondName']
                },
                totalTasks: {
                    $size: '$userTasks'
                },
                totalEstimation: {
                    $sum: '$userTasks.estimatedTime'
                }
            }
        }, 
    ];

    const aggregate = userModel.aggregate(pipeline);

    return aggregate;
};

module.exports = {
    createNewTask,
    updateEstimatedTime,
    getFirstFiveTaskForUser,
    allTasks,
};
