const group = require('../../src/models/Groups');
const mongojs = require('mongojs');
const mongoose = require('mongoose');
const config = require('../../config');




//create a group
exports.createGroup = function(req, res) {
    const db = mongoose.connect(config.database);
    var member = req.body.member;
    //adding the data to schema
    var newGroup = new group({
        groupName: req.body.groupName,
        groupOwner: req.body.adminName,
        phone: req.body.phone

    });
    //pushing all the 
    for (var i in req.body.member) {
        newGroup.members.push(req.body.member[i]);
    }

    console.log('newGroup', newGroup);

    /* console.log(group);*/
    newGroup.save(function(err) {
        if (err) {
            console.log('Error Inserting New Data');
            if (err.name === 'ValidationError') {
                for (field in err.errors) {
                    console.log(err.errors[field].message);
                }
            }
            if (err.name === 'MongoError' && err.code === 11000) {
                console.log("mongo error");
                return res.json({ success: false, message: "groupName already exists" });
            }
        } else {
            console.log("I am coming here");
            res.status(200).json({ success: true, message: 'Group had been created successfully' });
            //db.connection.close();
            //db.close();
            db.disconnect();
        }

    });
};
exports.updateFieldInGroup = function(req, res) {
    const db = mongoose.connect(config.database);
    /*    var qname = req.body.qname;
        var qvalue = req.body.qvalue;*/
    var phones = req.body.phones;
    var updateName = req.body.updateName;
    var updateValue = req.body.updateValue;
    /*    var query = {};
        query[qname] = qvalue;*/
    var updateInfo = {};
    updateInfo['$set'] = {};
    updateInfo['$set'][updateName] = updateValue;

    console.log('updateInfo', updateInfo);
    if (updateName == "members") {
        for (var i in updateValue) {
            updateInfo['$set'][updateName].push(updateValue[i]);
        }
    } else {
        updateInfo['$set'][updateName] = updateValue;
    }

    group.findOneAndUpdate({ phone: phones }, updateInfo, function(err, result) {
        if (err) {
            res.json({ success: false, message: 'Group Not found' });
        } else {
            //  console.log(result);
            res.status(200).json({ success: true, message: 'Group had been updated successfully' });
            db.disconnect();
        }
    });

};
exports.updateGroup = function(req, res) {
    const db = mongoose.connect(config.database);
    //var phones = req.body.phones;

    var updateInfo = {
        groupName: req.body.groupName,
        groupOwner: req.body.adminName,
        phone: req.body.phone,
        members: []
    };
    for (var i in req.body.member) {
        updateInfo.members.push(req.body.member[i]);
    }

    // console.log(updateInfo);
    group.findOneAndUpdate({ groupName: req.body.groupName }, { '$set': updateInfo }, function(err, result) {
        if (err) {
            res.json({ success: false, message: 'Group Not found' });
        } else if (result == null) {
            res.json({ success: false, message: 'Group Not found' });
        } else {
            console.log(result);
            res.status(200).json({ success: true, message: 'Group had been updated successfully' });
            db.disconnect();
        }
    });
};

exports.listOfGroups = function(req, res) {
    const db = mongoose.connect(config.database);
    var phone = req.param('phone');

    group.find({ phone: phone }, function(err, result) {
        if (err) {
            res.json({ success: false, message: 'No groups on this account' });
        } else {
            res.send(result);
            db.disconnect();
        }
    });
};
/*exports.deleteGroupMe*/