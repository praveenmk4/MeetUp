const express = require('express');
const router = express.Router();
var api = require('../controllers/api.controller');

router.route('/catalogues')
    .get(api.postInFormation);
// .post(catalogues.apiPOST);
router.route('/sendHome')
    .get(api.sendHome);
module.exports = router;