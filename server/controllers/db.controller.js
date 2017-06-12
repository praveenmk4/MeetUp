const user = require('../../src/models/User');
const mongojs = require('mongojs');
const mongoose = require('mongoose');
const config = require('../../config');




exports.test = function(req, res) {
    res.send('this is a test urlS');
}

exports.register = function(req, res) {
	const db = mongoose.createConnection(config.database);
    var host = req.body.host;
    var newUser = new user({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone
    });

    newUser.save(function(err) {
        if (err) {
            console.log('Error Inserting New Data');
            if (err.name === 'ValidationError') {
                for (field in err.errors) {
                    console.log(err.errors[field].message);
                }
            }
            if (err.name === 'MongoError' && err.code === 11000) {
                console.log("mongo error");
                return res.json({ success: false, message: "email already exists" });
            }
        } else {
            res.status(200).json({ success: true, message: 'User had been registered successfully' });
        }
        db.disconnect();
    })

};

//authenticate a user
exports.login = function(req, res) {
	const db = mongoose.createConnection(config.database);
	console.log(req.body.email);
    user.findOne({
        email: req.body.email
    }, function(err, user) {
        if (err) throw err;
        if (!user) {
            res.json({ success: false, message: 'Authentication failed! User not found' });
        } else if (user) {

            // check if password matches
            console.log(user);
            console.log(user.email);
            if (user.password != req.body.password) {
                res.json({ success: false, message: 'Authentication failed! invalid username and password' });
            } else {

                // if user is found and password is right


                // return the information including token as JSON
                res.status(200).json({
                    success: true,
                    message: 'user login successfull',
                    obj: user
                });
            }
        }
        db.disconnect();
    });
};
exports.getUserByMobileNumber = function(req, res) {
	const db = mongoose.createConnection(config.database);
    var phones = req.param('phone');
    console.log(phones);
    user.find({
            phone: phones
        },

        function(err, result) {
            if (err) {
                console.log(err);
                res.send('User Not Found');
            } else {
                res.send(result);
                // console.log(result);
            }
        });
    db.disconnect();
};