const express = require('express');
const router = express.Router();
const partCtrl = require('../controller/parts');

router.post('/list/:id/parts/new', partCtrl.createPart);



module.exports = router;