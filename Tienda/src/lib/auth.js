module.exports = {
    isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        res.redirect('/tienda');
        }else{
            res.redirect('/Login');
        }
    }
}