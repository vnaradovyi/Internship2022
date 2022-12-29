const { Router } = require('express');

const TaskComponent = require('./controller');

const taskValidation = require('../../config/task-validation-middleware');

const router = Router();

router.post('/', taskValidation.taskDataValidation, TaskComponent.createTask);

router.patch('/:id', taskValidation.updateTaskDataValidation, TaskComponent.patchTask);

router.get('/task/:p', TaskComponent.firstFiveTaskForUser);

router.get('/all', TaskComponent.allTaskOfUser);

module.exports = router;