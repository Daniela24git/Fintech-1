const actualizacionDatos = {}

const orm = require('../configuracionBaseDatos/baseDatos.orm')
const sql = require('../configuracionBaseDatos/baseDatos.sql')
const helpers = require('../lib/helpers')

actualizacionDatos.mostrar = async (req, res) => {
    const id = req.params.id
    const nombreCliente = await sql.query("SELECT idClientes, Nombres, username FROM clientes WHERE idClientes = ?", [id])
    res.render('metodos/actualizacionDatos', { nombreCliente });
}

actualizacionDatos.mandar = async (req, res) => {
    const { username, password, id } = req.body
    const actualizacionDatos = {
        username,
        password
    }
    actualizacionDatos.password = await helpers.encryptPassword(password);
    await orm.cliente.findOne({ where: { idClientes: id } })
        .then(clientes => {
            clientes.update(actualizacionDatos)
            req.flash('success', 'Se Actualizo Correctamente');
            res.redirect('/Login');
        })
}

module.exports = actualizacionDatos