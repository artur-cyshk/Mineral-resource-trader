const connection = require("../../../../configuration/database/connection");
const encrypt = require("../../../../services/encryptService");
const jwt = require("jwt-simple");  
const cfg = require("../../../../configuration/jwt/jwtConfig.js");  

module.exports = function (req, res, next) {
    if (req.body.name && req.body.password) {
        var query = "select id, name from user where ? limit 1";
        connection.query(query, { name: req.body.name, password: req.body.password }, (error, users) => {
	        if (users && users[0]) {
	            var payload = {
	                id: users[0].id
	            };
	            var token = jwt.encode(payload, cfg.jwtSecret);
	            res.json({
	            	message: 'You are welcome!',
	                token: token
	            });
	        }else{
	        	return next({status: 401, message: "Check your username or password"});
	        }
        })
    } else {
        return next({status: 401, message: "Check your username or password"});
    }
};