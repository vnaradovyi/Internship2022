const { Router } = require('express');

const userValidationData = require('../../config/user-validation-middleware');

const UsersComponent = require('./controler');

const TokenComponent = require('../Authorization/controller')

const router = Router();

router.get('/', UsersComponent.findAllUsers);

router.post('/', userValidationData.userDataValidation, UsersComponent.createUser);

router.delete('/:email', userValidationData.userEmailValidation, UsersComponent.deleteUserByEmail);

router.put('/:email', [userValidationData.userEmailValidation, userValidationData.userDataValidation], UsersComponent.putUserByEmail);

router.patch('/:email', [userValidationData.userEmailValidation, userValidationData.updateUserDataValidation], UsersComponent.patchUserByEmail);

router.post('/sign-in', userValidationData.signInUserDataValidation, TokenComponent.createToken);

router.post('/account', TokenComponent.verifyToken);

module.exports = router;
