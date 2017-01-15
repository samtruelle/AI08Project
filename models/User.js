/**
 * Created by I313195 on 14/01/2017.
 */
var mongoose = require('mongoose');

var user = new mongoose.Schema({
    Email:  {type: String},
    Password:  {type: String}
});
module.exports = mongoose.model("User", user);