const express = require('express');
const router = express.Router();
const listCtrl = require('../controller/list');
const partCtrl = require('../controller/parts');

router.get('/', listCtrl.index);
router.get('/new', listCtrl.new); 
router.post('/new', listCtrl.createList); 
//router.get('/:id', listCtrl.detail); Not sure if this should be in routes/list or routes/parts 

//router.delete('/:id', listCtrl.delete); Haven't implemented multiple lists yet
router.post('/update/:id', listCtrl.update); 




module.exports = router;