var express = require('express');
var multer = require('multer');
var papa = require('papaparse');
var mongoose = require('mongoose');
var file = require('../models/File.js');
var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;

var router = express.Router();
var upload = multer({dest: 'uploads/'})

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});


router.get('/home/flightDate/Before/:date', function (req, res, next) {
    var newDate = req.params.date.split('-');
    file.find({
        validUntil: {
            $lt: new Date(newDate[0], newDate[1], newDate[2])
        }
    }, function(err, data) {
        if (err) {
            console.log("error")
            res.status(400).json(err)
        } else
            res.status(200).send();
            res.data = data;
            console.log(data);
    })
});

router.post('/home/import', upload.single('file'), function (req, res, next) {
    //Ouvre (FSread js)

    fs.readFile('uploads/' + req.file.filename, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }

        papa.parse(data, {
            delimiter: ",",	// auto-detect
            newline: "",	// auto-detect
            header: true,
            complete: function (result) {

                var elements = result.data;

                for (var i = 0; i < elements.length; i++) {
                    var newFlightDate = elements[i].flight_date.split('-');
                    var newSnapDate = elements[i].snapshot_date.split('-');
                    elements[i].flight_date = new Date(newFlightDate[0], newFlightDate[1], newFlightDate[2]);
                    elements[i].snapshot_date = new Date(newSnapDate[0], newSnapDate[1], newSnapDate[2]);
                    elements[i].cabin = Number(elements[i].cabin);
                    elements[i].pax_Y = Number(elements[i].pax_Y);
                }

                file.collection.insert(elements, function (err, docs) {
                    if (err) {
                        console.log("error")
                        res.status(400).json(err)
                    } else
                        res.status(200).send();
                });
            },
            error: undefined,
            skipEmptyLines: true
        });
    });

    //Tu le ferme

    if (req.file.filename)
        res.status(200).send();
    else
        res.status(500).send()
});

module.exports = router;
