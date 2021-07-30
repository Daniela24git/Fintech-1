const loginCtrl = {};

loginCtrl.renderLogin = (req, res) => {
    res.render('login/login');
};

module.exports = loginCtrl;