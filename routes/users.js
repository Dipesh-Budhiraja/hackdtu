var express = require('express');
var router = express.Router();
var csrf =  require('csurf');
var csrfProtection = csrf();
router.use(csrfProtection);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/signin',function(req,res,next){
    // var messages=req.flash('error');
    res.render('user/signup-login',{csrfToken:req.csrfToken()});
})
router.post('/signup',function(req,res,next){

})
router.post('/signin',function (req,res,next){

})
module.exports = router;
