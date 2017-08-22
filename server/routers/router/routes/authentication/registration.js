const connection = require("../../../../configuration/database/connection");
const transporter = require("../../../../configuration/emailTransporter");
const encrypt = require("../../../../services/encryptService");
const _ = require("lodash");
const validate = require("../../../../services/validationService.js").registrationValidation;
const emailTransporterConfig = require("../../../../configuration/config.js").emailTransporter;
const quering = function(user, res, next) {
    let query = "insert into user set ?" ;
    connection.query(query, { name: user.username, 'password_hash': encrypt(user.password), email: user.email }, function(err, response) {
        if(err) {
            if(err.code === "ER_DUP_ENTRY") {
                const type = err.sqlMessage.includes('name_UNIQUE') ? 'Username' : 'Email';
                next({
                    message: `${type} already exists`
                });
            }else {
                next(true);
            }
            return;
        }
        transporter.sendMail(
            {
                from: emailTransporterConfig.from,
                to: user.email,
                subject: emailTransporterConfig.subject,
                text: `follow the link to activate email : http://127.0.0.1:3001/api/activate/user/${response.insertId}/email/${user.email}` 
            },
            (error, info) => {
                if (error) {
                    return next(true);
                }
                res.status(200).end();
            });
    })
};

module.exports = function (req, res, next) {

    if(!_.isEmpty(req.body) && validate(req.body) ) {
        quering(req.body, res, next);
    }else {
        return next({
            message : "Ups, problems with data!"
        });
    }
};