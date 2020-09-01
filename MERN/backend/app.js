const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const placesRoutes = require('./routes/places-routes');
const HttpError = require('./models/http-error');
const usersRoutes = require('./routes/users-routes');

const app = express();

app.use(bodyParser.json()); // parse any incoming request body, and extract any json, convert to regular js, and calls next automatically with the body being filled

app.use('/api/places/', placesRoutes); // /api/places is the initial filter for placesRoutes, then you append the different paths present in the placesRoutes

app.use('/api/users/', usersRoutes);

app.use((req, res, next) => {
  return next(new HttpError('Could not find this route', 404));
});

app.use((error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }
  // Basically, this check is necessary for scenarios where a response header has already been sent but you encounter an error while streaming the response to a client for example. Then, you forward the error encountered to the default express error handler that will handle it for you !

  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occurred!' });
});

mongoose
  .connect(
    'mongodb+srv://mern_srv_acc:toto123@cluster0.4cluv.azure.mongodb.net/places_db?retryWrites=true&w=majority'
  )
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    clg(err);
  });
