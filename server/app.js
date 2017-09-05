const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const router = require('./routers/router');
const socketRouter = require('./routers/socketRouter');
const errorHandler = require('./configuration/errorHandler');
const config = require('./configuration/config');
const auth = require("./configuration/jwt/jwtAuth.js")();  
const app = express();

app.set('view engine', 'jade');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(cookieParser());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', config.cors.host);
    res.setHeader('Access-Control-Allow-Methods', config.cors.methods);
    res.setHeader('Access-Control-Allow-Headers', config.cors.headers);
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(auth.initialize());

var server = app.listen(config.port, function() {
    console.log(`server listening on port ${config.port}`);
});

var io = require('socket.io')(server);

app.use('/api',router);
app.use(errorHandler);
socketRouter(io);
