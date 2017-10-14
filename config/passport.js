const passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');

passport.serializeUser(function(user,done){
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
        // console.log(req.body);
        req.checkBody('email','invalid Email').notEmpty().isEmail();

        req.checkBody('password','invalid password').notEmpty().isLength({min:8});
        req.checkBody('phoneNumber','invalid pphone number').notEmpty().isLength(10);
        req.checkBody('username','invalid username').notEmpty();

        // req.checkBody('password','invalid password').notEmpty().isLength({min:10});
        // req.checkBody('password','invalid password').notEmpty().isLength({min:10});
        // req.checkBody('password','invalid password').notEmpty().isLength({min:10});

        var errors = req.validationErrors();
        if(errors){
            var messages = [];
            errors.forEach(function (error) {
                messages.push(errors.msg);
            })
            return done(null,false,req.flash('error',messages));
        }
        User.findOne({'username':username},function (err,user) {
            if(err){return done(err)};
            if(user){
                return done(null,false,{message:'username already exists please choose another'});
            }
            var newUser = new User();
            newUser.email = req.body.email;
            newUser.username = username;
            newUser.password = newUser.encryptPassword(password);
            newUser.phoneNumber = req.body.phoneNumber;
            newUser.name = req.body.name;
            newUser.dlnumber = req.body.dl;
            newUser.adhaarNo = req.body.aadhar;
            newUser.save(function(err, result){
                if(err){
                    return done(err);
                }
                else{
                    console.log('hogya save');
                    return done(null, newUser);
                }
            });
            // console.log(req.body);
        })
    }
))



passport.use('local-signin', new LocalStrategy({
    usernameField:'username',
    passwordField: 'password',
    passReqToCallback: true
}, function(req, email, password, done){
    req.checkBody('username', 'Invalid Email').notEmpty();
    req.checkBody('password', 'Invalid Password').notEmpty();

    var errors = req.validationErrors();
    if(errors){
        var messages = [];
        errors.forEach(function(error){
            messages.push(error.msg);
        });
        return done(null, false, req.flash('error', messages));
    }

    User.findOne({'username': username}, function(err, user){
        if(err){
            return done(err);
        }
        if(!user){
            return done(null, false, {message: 'No User Found.'});
        }
        if(!user.validatePassword(password)){
            return done(null, false, {message: 'Wrong Password'});
        }
        return done(null, user);
    });
}));
