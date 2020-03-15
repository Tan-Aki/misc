const { validationResult } = require('express-validator');

module.exports = {
	handleErrors(templateFunc, dataCb) {
		return async (req, res, next) => {
			const errors = validationResult(req); // Extracts the validation errors from a request and makes them available in a Result object

			if (!errors.isEmpty()) {
				let data = {};
				if (dataCb) data = await dataCb(req);

				return res.send(templateFunc({ errors, ...data })); // { errors, ...data } un object qui contient {errors : blabla, product : {title: 'ewwrwerwe', price: 11111, image: ' ', id: '01837dff'}}
			}

			next();
		};
	},
	requireAuth(req, res, next) {
		if (!req.session.userId) return res.redirect('/signin');
		next();
	}
};
