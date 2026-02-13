const express = require('express');
const router = express.Router();
const { getTables } = require('../controllers/tablesController');

router.get('/', getTables);

module.exports = router;
