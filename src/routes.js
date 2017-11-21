var express = require('express');
var router = express.Router();
var path = require('path');

router.post('/login', function(req, res) {
  var post = req.body;
  console.log(post);
  if (post.username !== '') {
    req.session.user_id = post.username;
    //res.redirect('/chat');
    res.status(200).json({response: "success"});
  } else {
    console.log('bad login');
    res.status(400).json({response: "bad login"});
  }
})

router.get('/logout', function(req,res) {
  delete req.session.user_id;
  res.redirect('/');
})

router.get('/chat', checkAuth, function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

function checkAuth(req, res, next) {
  if (!req.session.user_id) {
    res.send('You are not authorized to view this page');
  } else {
    next();
  }
}

module.exports = router;