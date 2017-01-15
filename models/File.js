/**
 * Created by I313195 on 14/01/2017.
 */
var mongoose = require('mongoose');

var fileSchema = new mongoose.Schema({
    snapshot_date:  {type: Date},
    carrier: {type:String},
    flight: {type:String},
    flight_date: {type: Date},
    cabin: {type: Number},
    subclass: {type: String},
    pos_code: {type: String},
    origin: {type: String},
    destination: {type: String},
    pax_Y: {type: Number}
});

module.exports = mongoose.model("File", fileSchema);