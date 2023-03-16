const express = require('express');
const router = express.Router();
const { auth, requiresAuth } = require('express-openid-connect');
require('dotenv').config();

const itemController = require('../controllers/item');
const validation = require('../middleware/validate');
//  router.get('/', (req, res) => {
//     res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
//router.get('/', requiresAuth(), itemController.getAllItems);

router.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? true : itemController.getAllItems);
  });


router.get('/:id', itemController.getOneItem);
router.post('/', validation.validateCreateItem, itemController.createItem);
router.put('/:id', validation.validateCreateItem, itemController.updateItem);
router.delete('/:id', itemController.deleteItem);

module.exports = router;