const perfilCtrl = {}

const orm = require('../configuracionBaseDatos/baseDatos.orm')
const sql = require('../configuracionBaseDatos/baseDatos.sql')


perfilCtrl.renderPerfil = (req, res) => {
    res.render('tiendaAgregar');
}

perfilCtrl.addDatos = async (req, res) => {
    const ids = req.params.id
    const { nombreNegocio, celular, telefono, ruc, direccion } = req.body
    const newTienda = {
        nombreNegocio,
        celular,
        telefono,
        ruc,
        direccion,
        usuarioIdUsuarios: ids
    }
    await orm.tienda.create(newTienda)
        .then(() => {
            req.flash('success', 'Se guaardo con exito')
            res.redirect('/tienda/lista/' + ids);
        })
}

perfilCtrl.rederList = async (req, res) => {
    const id = req.params.id
    const usuarios = sql.query("SELECT * FROM usuarios ")
    const tiendas = await sql.query("SELECT * FROM tiendas WHERE usuarioIdUsuarios = ?", [id])
    res.render('tienda/tiendaLista', { tiendas, usuarios})
}

perfilCtrl.renderEdit = async (req, res) => {
    const id = req.params.id
    const tienda = await sql.query("SELECT * FROM tiendas WHERE idTiendas = ?", [id])
    res.render('tienda/tiendaEditar', { tienda: tienda });
}

perfilCtrl.edit = async (req, res) => {
    const ids = req.params.id
    const id = req.user.idUsuarios
    const { nombreNegocio, celular, telefono } = req.body
    const newTienda = {
        nombreNegocio,
        celular,
        telefono
    }

    await orm.tienda.findOne({ where: { idTiendas: ids } })
        .then(tiendas => {
            tiendas.update(newTienda)
            req.flash('success', "Se guardo correctamente")
            res.redirect("/tienda/lista/" + id)
        })
}

module.exports = perfilCtrl