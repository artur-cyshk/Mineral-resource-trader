module.exports = function (err, req, res, next) {
    res.status(err.status || 500).json({message: err.message || 'There was an error on the server' });
};