const express = require('express');
const router = express.Router();
const { auth, requiresAuth } = require('express-openid-connect');
require('dotenv').config();

const userController = require('../controllers/user');
const validation = require('../middleware/validate');

router.get('/', requiresAuth(), userController.getAllUsers);
router.get('/:id', userController.getOneUser);
router.post('/', validation.validateCreateUser, userController.createUser);
router.put('/:id', validation.validateCreateUser, userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;