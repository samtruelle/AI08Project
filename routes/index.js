var express = require('express');
var multer = require('multer');
var router = express.Router();
var upload = multer({ dest: 'uploads/' })

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/home/import', upload.single('file'), function(req, res, next) {
  console.log(req.file);

  //Ouvre (FSread js)

  //Manage

  //Tu le ferme

  //Tu réponds
  
  if(req.file.filename)
    res.status(200).send();
  else
    res.status(500).send()
});

module.exports = router;
