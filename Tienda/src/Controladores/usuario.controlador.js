const usuairoCtrl = {};

usuairoCtrl.renderUserProfile = (req, res, next) => {
  res.render('tienda/tiendaLista');
}
module.exports = usuairoCtrl;