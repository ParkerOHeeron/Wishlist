var express = require('express');
var router = express.Router();
const partsCtrl = require('../controller/parts');

router.get('/', partsCtrl.index);
router.post('/parts', partsCtrl.create);

module.exports = router;