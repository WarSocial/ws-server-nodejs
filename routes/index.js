
/*
 * GET home page.
 */

exports.index = function respond(req, res, next) {
    res.send('hi');
    return next();
};