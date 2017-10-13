const passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');

passport.serializeUser(function(err,done){
    done(null,user.id);
})

passport.deserializeUser(function (id,done) {
    User.findById(id,function (err,user) {
        done(err,user);
    })
})

passport.use('local-signup',new LocalStrategy({
        usernameField:'username',
        passwordField:'password',
        passReqToCallback:true
    },
    function (req,username,password,done) {
        req.checkBody('email','invalid Email').notEmpty().isEmail();
        req.checkBody('password','invalid password').notEmpty().isLeght({min:10});
        
    }


))
