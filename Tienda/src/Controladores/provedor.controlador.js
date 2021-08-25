const proveedorCtrl = {};

const orm = require('../configuracionBaseDatos/baseDatos.orm')
const sql = require('../configuracionBaseDatos/baseDatos.sql')

proveedorCtrl.renderAddProveedor = (req, res) => {
    res.render('Proveedor/agregar');
};

proveedorCtrl.addProveedor = async (req, res) => {
    const id = req.params.id
    const { NombreProveedor, Direccion, Celular, Telefono, Estado } = req.body;
    const newProveedor = {
        NombreProveedor,
        Direccion,
        Celular,
        Telefono,
        Estado,
        usuarioIdUsuarios: id, 
        tiendaIdTiendas: id
    };
    await orm.provedor.create(newProveedor)
        .then(() => {
            req.flash('success', 'Se Guardo Correctamente');
            res.redirect('/proveedor/lista/' + id);
        })
}
proveedorCtrl.renderProveedor = async (req, res) => {
    const id = req.params.id
    const proveedores  = await sql.query('SELECT * FROM provedores  WHERE usuarioIdUsuarios = ?', [id])
    res.render('Proveedor/lista', {proveedores})
}

proveedorCtrl.deleteProveedor = async (req, res) => {
    const id = req.params.id;
    await orm.provedor.destroy({ where: { idProvedores: id } });
    req.flash('success', 'Se Elimino Correctamente');
    res.redirect('/proveedor/lista/' + id);
};

proveedorCtrl.renderEditProveedor = async (req, res) => {
    const id = req.params.id;
    const proveedores = await sql.query('SELECT * FROM provedores  WHERE idProvedores = ?', [id])
    res.render('Proveedor/editar', {proveedores})
};

proveedorCtrl.editProveedor = async (req, res) => {
    const id = req.params.id;
    const ids = req.user.idUsuarios
    const { NombreProveedor, Direccion, Celular, Telefono, Estado } = req.body;
    const newProveedor = {
        NombreProveedor,
        Direccion,
        Celular,
        Telefono,
        Estado,
    };
    await orm.provedor.findOne({ where: { idProvedores: id } })
        .then(provedor => {
            provedor.update(newProveedor)
            req.flash('success', 'Se Actualizo Correctamente');
            res.redirect('/proveedor/lista/' + ids);
        })
}
module.exports = proveedorCtrl