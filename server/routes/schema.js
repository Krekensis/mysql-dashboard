const express = require('express');
const router = express.Router();
const { getGraph } = require('../controllers/schemaController');

router.get('/graph', getGraph);

module.exports = router;
