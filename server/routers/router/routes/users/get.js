const connection = require('../../../../configuration/database/connection');

module.exports = function (req, res, next) {
	console.log(req.body, req.params, req.query);
	const query = `select id, name, email, is_admin as isAdmin, is_banned as isBanned, is_email_submitted as isEmailSubmitted from user limit ?, ?`;
	connection.query(query, [req.query.page * req.query.limit, parseInt(req.query.limit)], (error, users) => {
		if (error) {
			return next({
				status: 500,
				message: 'There was an error while getting users. Try later.'
			})
		}
		res.status(200).json(users);
	})
};
