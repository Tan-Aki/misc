const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/user", (req, res, next) => {
  res.send("<h1> User : " + req.body.username + "</h1>");
});


app.get("/", (req, res, next) => {
  res.send(
    '<form method="POST" action="/user" ><input type="text" name="username"><button type="submit">Create User</button></form>'
  );
});

////////////////////////////
// Version without body parser
///////////////////////////

// const express = require("express");

// const app = express();

// app.use((req, res, next) => {
//   let body = "";
//   req.on("end", () => {
//     const userName = body.split("=")[1];

//     if (userName) {
//       req.body = { name: userName };
//     }
//     next();
//     //   next fucntion that you call if you don't want to send a response from this middleware, but you want to forward the request to the next middleware in line
//     //   So you should always call next, unless you are in the middleware in which you want to send back the response
//   });

//   req.on("data", (chunk) => {
//     body += chunk;
//   });

//   console.log("MIDDLEWARE");
// });

// app.use((req, res, next) => {
//   if (req.body) {
//     return res.send("<h1> User : " + req.body.name + "</h1>");
//   }

//   res.send(
//     '<form method="POST"><input type="text" name="username"><button type="submit">Create User</button></form>'
//   );
// });

app.listen(5000);
