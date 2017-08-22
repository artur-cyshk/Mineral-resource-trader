const express = require('express');
const router = express.Router();
const auth = require("../../configuration/jwt/jwtAuth.js")();
// auth.authenticate() - set second param to router functions if route need authorized user
router.post('/login', require('./routes/authentication/login'));
router.post('/registration', require('./routes/authentication/registration'));
router.get('/activate/user/:id/email/:email', require('./routes/authentication/activation'));

router.get('/user', auth.authenticate(), require('./routes/user/get'));
router.put('/user', auth.authenticate(), require('./routes/user/put'));

module.exports = router;
