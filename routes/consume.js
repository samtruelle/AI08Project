var express = require('express');
var router = express.Router();

/* GET import page. */
router.get('/', function(req, res, next) {
    console.log(req.files)
    res.render('consume', { title: 'Import' });
});

module.exports = router;
