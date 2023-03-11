const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');
const validation = require('../middleware/validate');

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getOneUser);
router.post('/', validation.validateCreateUser, userController.createUser);
router.put('/:id', validation.validateCreateUser, userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;