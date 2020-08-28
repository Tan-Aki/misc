const { v4: uuidv4 } = require("uuid");

const HttpError = require("../models/http-error");

const DUMMY_USERS = [
  {
    id: "u1",
    name: "Tan Jul",
    email: "tan@test.com",
    password: "test",
  },
  {
    id: "u2",
    name: "toto toto",
    email: "toto@test.com",
    password: "test",
  },
];

const getUsers = (req, res, next) => {
  res.json({ users: DUMMY_USERS });
};

const signup = (req, res, next) => {
  const { name, email, password } = req.body;

  const hasUser = DUMMY_USERS.find((u) => u.email === email);

  if (hasUser) {
    return next(new HttpError("User already exists ", 422));
  }

  const userToCreate = {
    id: uuidv4(),
    name,
    email,
    password,
  };

  DUMMY_USERS.push(userToCreate);

  res.status(201).json({ user: userToCreate });

  //   {
  //     "name" : "toto",
  //     "email" : "toto@toto.com",
  //     "password" : "test"

  // }
};

const login = (req, res, next) => {
  const { email, password } = req.body;
  const userToIdentify = DUMMY_USERS.find((u) => u.email === email);

  if (!userToIdentify || userToIdentify.password !== password) {
    return next(new HttpError("Could not identify user, credentials seem to be wrong", 401));
  }

  res.json({ message: "Logged in !" });
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
