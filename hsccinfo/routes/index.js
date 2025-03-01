var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // DEBUGGING CODE using an if statement and a .env variable
  if (process.env.CONSOLE_DEBUG=="true"){
    console.log("Debugging enabled!");
  }
  res.render('index', { title: 'Express' });
});

module.exports = router;


