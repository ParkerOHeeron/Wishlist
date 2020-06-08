const express = require('express');
const router = express.Router();
const listCtrl = require('../controller/list');
const partCtrl = require('../controller/parts');

router.get('/', listCtrl.index);
router.get('/new', listCtrl.new);  
router.post('/', listCtrl.createList);
router.get('/:id', listCtrl.show);
//router.delete('/:id', listCtrl.delete); Haven't implemented multiple lists yet
router.post('/update/:id', listCtrl.update); 




module.exports = router;