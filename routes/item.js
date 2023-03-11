const express = require('express');
const router = express.Router();

const itemController = require('../controllers/item');
const validation = require('../middleware/validate');

router.get('/', itemController.getAllItems);
router.get('/:id', itemController.getOneItem);
router.post('/', validation.validateCreateItem, itemController.createItem);
router.put('/:id', validation.validateCreateItem, itemController.updateItem);
router.delete('/:id', itemController.deleteItem);

module.exports = router;