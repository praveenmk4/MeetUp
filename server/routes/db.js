const express = require('express');
const router = express.Router();

var db = require('../controllers/db.controller');

router.route('/test')
    .get(db.test);
router.route('/register')
    .post(db.register);
router.route('/login')
    .post(db.login);
router.route('/userList')
    .get(db.getUserByMobileNumber);
module.exports = router;