const express = require('express');
const router = express.Router();
const suspectsCtrl = require('../../controllers/suspects');
const multer  = require('multer')
const upload = multer(); // <- handles multipart/formdata requests(photos)

// /*---------- Public Routes ----------*/

router.post('/', upload.single('photo'), suspectsCtrl.create);
router.get('/', suspectsCtrl.index)

/*---------- Protected Routes ----------*/

module.exports = router;