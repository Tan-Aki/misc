module.exports = {
	getError(errors, prop) {
		try {
			return errors.mapped()[prop].msg;
		} catch (err) {
			return '';
		}
		// prop === 'email' || 'password' || 'passwordConfirmation'

		// errors.mappped() === {
		//     email : {
		//         msg : 'Invalid Email'
		//     },
		//     password : {
		//         msg : 'Password too short'
		//     },
		//     passwordConfirmation : {
		//         msg : 'Password too short'
		//     }
		// }
	}
};
