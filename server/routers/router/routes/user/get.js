const connection = require('../../../../configuration/database/connection');

module.exports = function (req, res, next) {
	const query = `select id, name, balance, is_admin as isAdmin, is_banned as isBanned from user where id = ? and is_email_submitted = 1`;
	connection.query(query, [req.user.id], (error, users) => {
		if(error || (users && users.length === 0)) {
			return next({
				status : 401,
				message : 'You need authorization!'
			})
		}
		if(users && users[0]) {
			if(users[0].isBanned) {
				return next({
					status: 403,
					message: 'You were banned by admin.'
				})
			}
		}
		res.status(200).json(users[0]);
	});
};
