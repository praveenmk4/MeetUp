var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Groups = mongoose.model('group', new Schema({
    groupName: String,
    groupOwner: String,
    phone: { type: Number },
    members: [{ firstName: String, lastName: String, memberMobile: { type: Number } }]
}));

module.exports = Groups;