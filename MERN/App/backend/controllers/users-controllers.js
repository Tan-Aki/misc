// const { v4: uuidv4 } = require('uuid');
const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const User = require('../models/user');

const getUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find({}, '-password'); // can also be find({}, 'email name image etc')
  } catch (err) {
    return next(
      new HttpError('Fetching users failed, please try again later.', 500)
    );
  }
  res.json({ users: users.map((user) => user.toObject({ getters: true })) });
};

const signup = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log(errors);
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }

  const { name, email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return next(new HttpError('Signing up failed, please try again later', 422));
  }

  if (existingUser) {
    return next(
      new HttpError('User exists, already, please login instead', 422)
    );
  }

  const userToCreate = new User({
    name,
    email,
    image: 'https://pixabay.com/photos/ball-environment-grass-nature-3290624/',
    password,
    places: [],
  });

  try {
    await userToCreate.save();
  } catch (err) {
    return next(new HttpError('Signing up failed, please try again', 500));
  }

  res.status(201).json({ user: userToCreate.toObject({ getters: true }) });

};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  // const userToIdentify = DUMMY_USERS.find((u) => u.email === email);

  // if (!userToIdentify || userToIdentify.password !== password) {
  //   return next(
  //     new HttpError(
  //       'Could not identify user, credentials seem to be wrong',
  //       401
  //     )
  //   );
  // }

  let existingUser;

  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return next(
      new HttpError('Logging in failed, please try again later', 500)
    );
  }

  if (!existingUser || existingUser.password !== password) {
    return next(
      new HttpError('Invalid credentials, could not log you in', 401)
    );
  }

  res.json({ message: 'Logged in !' });
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
