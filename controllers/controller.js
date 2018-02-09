const express = require('express');
// initialize express router
const router = express.Router();
// 
const Article = require('../models/Articles.js');


// Display the application's home page
router.get('/', function(req, res) {
  res.send('/client/public/index.html');
});

router.get('/api/articles',function(req, res){
  console.log(req.body);

})
module.exports = router;