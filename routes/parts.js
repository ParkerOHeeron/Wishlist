const express = require('express');
const router = express.Router();
const partCtrl = require('../controller/parts');


router.post('/list/:id/parts', partCtrl.create);

module.exports = router;
