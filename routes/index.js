var express = require('express');
var router = express.Router();
var app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/tasks',function(req, res, next){
  res.render('task', { mark: 'aaa',username:'jack',age:'25' });
});

module.exports = router;
