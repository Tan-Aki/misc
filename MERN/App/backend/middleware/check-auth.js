// const require('')
const HttpError = require('../models/http-error');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        next();
    }

    try {
        const token = req.headers.authorization.split(' ')[1]; // Authorization : 'Bearer TOKEN'
        if (!token) {
            throw new Error();
            // error if req.headers.authorization.split(' ')[1]  is undefined
        }
        const decodedToken = jwt.verify(token, 'supersecret_dont_share');
        req.userData = { userId: decodedToken.userId };
        next();
    } catch (err) {
        return next(new HttpError('Authentication failed!', 401));
        // error if req.headers.authorization was empty and so the split failed, or any other other
    }
};
