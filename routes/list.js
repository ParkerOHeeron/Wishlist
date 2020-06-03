const express = require('express');
const router = express.Router();
const listCtrl = require('../controller/list');
const partCtrl = require('../controller/parts');

router.get('/', listCtrl.index);
//router.get('/new', listCtrl.new); Not sure if this should be in routes/list or routes/parts 
//router.get('/:id', listCtrl.detail); Not sure if this should be in routes/list or routes/parts 
//router.post('/new', listCtrl.createList); Haven't implemented multiple lists yet
//router.delete('/:id', listCtrl.delete); Haven't implemented multiple lists yet
//router.post('/update/:id', listCtrl.update); This should redirect back to list/show showing updated list



module.exports = router;