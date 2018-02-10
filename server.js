const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Setup body-parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/react-nyt");

// Add routes, both API and view
app.use(routes);

// Start the server
app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
