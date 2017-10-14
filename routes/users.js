var express = require('express');
var router = express.Router();
var csrf =  require('csurf');
var passport = require('passport')
var csrfProtection = csrf();
router.use(csrfProtection);

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/profile',isLoggedIn,function (req,res,next) {
    res.render('main/index');
})

router.get('/logout',isLoggedIn,function (req,res,next) {
    req.logout();
    res.redirect('/');
})
router.use('/',notLoggedIn,function(req,res,next){
    next();
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
    successRedirect:'/users/profile',
    failureRedirect:'/users/signup',
    failureFlash:true
}))
// router.post(/signin')
router.post('/signin',passport.authenticate('local-signin',{
    successRedirect:'/users/profile',
    failureRedirect:'/users/signin',
    failureFlash:true
}))
module.exports = router;

function isLoggedIn(req,res,next) {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}

function notLoggedIn(req,res,next) {
    if(!req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}
