const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/users', require('./users'))
router.use('/item', require('./item'))

module.exports = router;