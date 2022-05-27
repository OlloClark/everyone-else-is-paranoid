const express = require('express');
const router = express.Router();
const snoopsCtrl = require('../../controllers/snoops')

router.post('/posts/:id/snoops', snoopsCtrl.create)
router.delete('/snoops/:id', snoopsCtrl.deleteLike)

module.exports = router;