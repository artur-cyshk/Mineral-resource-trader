const connection = require('../../../../configuration/database/connection');

module.exports = function (req, res, next) {
    const query = `update user set ? where id = ?`;
    connection.query(query, [{ 'is_admin': req.body.isAdmin, 'is_banned' : req.body.isBanned }, req.body.id], (error) => {
        if(error) {
            return next({
                message : 'There was an error while updating user data'
            })
        }
        res.status(200).json(req.body);
    });
};
