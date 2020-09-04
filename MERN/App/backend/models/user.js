const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  // unique property : to create an index, so that this email info is fetched faster
  password: { type: String, required: true, minlength: 6 },
  image: { type: String, required: true },
  places: [{ type: mongoose.Types.ObjectId, require: true, ref: 'Place' }],  // One to many relationship thanks to the array []
});

userSchema.plugin(uniqueValidator);
// this plugin makes sure that the properties with unique are trully unique in the db

module.exports = mongoose.model('User', userSchema);
