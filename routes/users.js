var express = require('express');
var router = express.Router();
var csrf =  require('csurf');
var passport = require('passport')
var csrfProtection = csrf();
router.use(csrfProtection);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/profile',function (req,res,next) {
    res.render('user/signin');
})
router.get('/signin',function(req,res,next){
    // var messages=req.flash('error');
    res.render('user/signin',{csrfToken:req.csrfToken()});
})
router.get('/signup',function(req,res,next){
    var messages=req.flash('error');
    // console.log('in signup');
    res.render('user/signup',{csrfToken:req.csrfToken(),messages:messages,hasErrors:messages.length>0});
})

router.post('/signup',passport.authenticate('local-signup',{
    successRedirect:'/profile',
    failureRedirect:'/signup',
    failureFlash:true
}))
// router.post('/signin',function (req,res,next){
//
// })
module.exports = router;
