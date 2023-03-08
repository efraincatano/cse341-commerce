const express = require('express');
const router = express.Router();

const itemController = require('../controllers/item');

router.get('/:id', itemController.getOneItem);
router.post('/', itemController.createItem);

module.exports = router;