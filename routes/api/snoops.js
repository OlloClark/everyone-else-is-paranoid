const express = require('express');
const router = express.Router();
const snoopsCtrl = require('../../controllers/snoops')

router.post('/suspects/:id/snoops', snoopsCtrl.create)
router.delete('/snoops/:id', snoopsCtrl.deleteSnoop)

module.exports = router;