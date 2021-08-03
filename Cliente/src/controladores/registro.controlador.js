const authCtrl = {};

const passport = require('passport');

authCtrl.renderSignUp = (req, res) => {
    res.render('login/registro');
};

authCtrl.signUp = passport.authenticate('local.signup', {
    successRedirect: '/CerrarSecion',
    failureRedirect: '/registro',
    failureFlash: true
});

authCtrl.renderSignIn = (req, res, next) => {
    res.render('login/login');
};

authCtrl.signIn = passport.authenticate('local.signin', {
    successRedirect: '/tienda/lista',
    failureRedirect: '/login',
    failureFlash: true
});

authCtrl.cierreSeccion = (req, res, next) => {
    req.logOut();
    res.redirect('/');
};

module.exports = authCtrl;