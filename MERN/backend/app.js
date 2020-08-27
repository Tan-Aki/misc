const express = require("express");
const bodyParser = require("body-parser");

const placesRoutes = require('./routes/places-routes')
// const usersRoutes = require('./routes/users-routes')

const app = express();

app.use('/api/places/', placesRoutes)   // /api/places is the initial filter for placesRoutes, then you append the different paths present in the placesRoutes

app.listen(5000);
