const connection = require("../../../../configuration/database/connection");
const encrypt = require("../../../../services/encryptService");
const jwt = require("jwt-simple");  
const cfg = require("../../../../configuration/jwt/jwtConfig.js");  

module.exports = function (req, res, next) {
    const query = "update user set ? where user.id = ? and user.email = ?" ;
    connection.query(query,[{ 'is_email_submitted': true }, req.params.id, req.params.email], function(err, data) {         
    	res.render('email', { 
            isError: !!err || !data.affectedRows,
            redirectTimeInSeconds: '5',
            link: 'http://127.0.0.1:3000/auth/signIn/'
        });
    })
};