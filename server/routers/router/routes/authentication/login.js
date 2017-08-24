const connection = require("../../../../configuration/database/connection");
const encrypt = require("../../../../services/encryptService");
const jwt = require("jwt-simple");  
const cfg = require("../../../../configuration/jwt/jwtConfig.js");  

module.exports = function (req, res, next) {
    if (req.body.username && req.body.password) {
         var query = 'select id, name, balance, is_admin as isAdmin from user where name = "' + req.body.username +
            '" and password_hash = "' + encrypt(req.body.password) + '" and is_email_submitted = 1 and is_banned = 0 limit 1';
        connection.query(query, (error, users) => {
        	if (users && users[0]) {
	            var payload = {
	                id: users[0].id
	            };
	            var token = jwt.encode(payload, cfg.jwtSecret);
	            res.json({
	            	message: 'You are welcome!',
	                token: token,
	                user: users[0]
	            });
	        }else{
	        	return next({status: 401, message: "Check your username or password"});
	        }
        })
    } else {
        return next({status: 401, message: "Check your username or password"});
    }
};