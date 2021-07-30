const actualizacionDatos = {}

const orm = require('../configuracionBaseDatos/baseDatos.orm')
const sql = require('../configuracionBaseDatos/baseDatos.sql')
const helpers = require('../lib/helpers')
const cliente = require('../modelos/cliente')

actualizacionDatos.mostrar = async (req, res) => {
    const id = req.params.id
    const nombreCliente = await sql.query("SELECT id, Nombres FROM clientes WHERE id = ?", [id])
    res.render('metodos/actualizacionDatos', { nombreCliente });
}

actualizacionDatos.mandar = async (req, res) => {
    const { username, password, id } = req.body
    const actualizacionDatos = {
        username,
        password
    }
    actualizacionDatos.password = await helpers.encryptPassword(password);
    await orm.cliente.findOne({ where: { id: id } })
        .then(clientes => {
            clientes.update(actualizacionDatos)
            req.flash('success', 'Se Actualizo Correctamente');
            res.redirect('/Login');
        })
}

module.exports = actualizacionDatos