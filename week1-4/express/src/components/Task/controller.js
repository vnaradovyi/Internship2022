const Task = require('./servise')

async function createTask(req, res) {
    try {
        const newTask = req.body;

        const token = req.headers['access-token'];

        const createdTask = await Task.createNewTask(token, newTask);

        return res.status(200).json({
            data: createdTask,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: 'Can not created task. Error on server!',
        });
    }
};

async function patchTask(req, res) {
    try {
        const idTask = req.params;

        const newEstimatedTime = req.body;

        const updateEstimatedTimeTask = await Task.updateEstimatedTime(idTask, newEstimatedTime);

        return res.status(200).json({
            data: updateEstimatedTimeTask,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: 'Can not update task. Error on server!',
        });
    }
};

async function firstFiveTaskForUser(req,res) {
    try {
        const page = req.params.p;

        const token = req.headers['access-token']

        const firstFiveTask = await Task.getFirstFiveTaskForUser(page, token);

        return res.status(200).json({
            data: firstFiveTask,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: 'Can not find task. Error on server!',
        });
    }
};

async function allTaskOfUser(req,res) {
    try {
        const token = req.headers['access-token']

        const userTasks = await Task.allTasks(token);

        return res.status(200).json({
            userTasks,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: 'Can not find task. Error on server!',
        });
    }
};

module.exports = {
    createTask,
    patchTask,
    firstFiveTaskForUser,
    allTaskOfUser,
};
