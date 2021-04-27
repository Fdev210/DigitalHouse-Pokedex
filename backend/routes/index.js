var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { 
  res.render('index', { title: 'Express', darkMode: req.session.darkMode });
});

// router.get('/legendaries')
router.get('/dark-mode', function(req, res) {
  req.session.darkMode = !req.session.darkMode;

  res.cookie('darkMode', req.session.darkMode, {
    maxAge: 86400
  });

  res.redirect('/');
})

module.exports = router;
