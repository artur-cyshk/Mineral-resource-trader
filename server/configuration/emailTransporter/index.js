const nodemailer = require('nodemailer');
module.exports = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'school26iko@gmail.com',
        pass: '8martogkris'
    }
});