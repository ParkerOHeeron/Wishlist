const express = require('express');
const router = express.Router();
const partCtrl = require('../controller/parts');


router.post('/list/:id/parts', partCtrl.create);
router.delete('/list/:id/parts/:id', partCtrl.delete);

module.exports = router;
