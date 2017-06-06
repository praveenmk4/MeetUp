const express = require('express');
const router = express.Router();

var groups = require('../controllers/groups.controller');

router.route('/createGroup')
    .post(groups.createGroup);
router.route('/updateGroup')
    .post(groups.updateGroup);
router.route('/updateField')
    .post(groups.updateFieldInGroup);
router.route('/groupList')
    .get(groups.listOfGroups);
module.exports = router;