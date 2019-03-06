let express = require('express');
let router = express.Router();
let SampleController = require('../controllers/SampleController');

router.get("/", SampleController.getFileData);

module.exports = router;