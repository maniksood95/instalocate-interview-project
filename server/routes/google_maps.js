const express = require('express');
const router = express.Router();

// Listing API endpoints
router.get('/', function(req, res, next){
  res.send('google maps works');
});

module.exports = router;
