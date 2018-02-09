const express = require('express');
// initialize express router
const router = express.Router();

const Article = require('../models/Article.js');




const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

// These constiables will hold the results we get from the user's inputs via HTML
const searchTerm = "";
const numResults = 0;
const startYear = 0;
const endYear = 0;

// queryURLBase is the start of our API endpoint. The searchTerm will be appended to this when
// the user hits the search button
const queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
  authKey + "&q=";






router.get('/api/')

module.exports = router;