const entradaSalida = {}

const orm = require('../configuracionBaseDatos/baseDatos.orm')
const sql = require('../configuracionBaseDatos/baseDatos.sql')

entradaSalida.mostrarEntradasSalidas = (req, res) => {
    res.render('EntradasSalidas/entradasSalidas');
}

entradaSalida.mostrarEntrada = async (req, res) => {
    const ids = req.user.id
    const entrasLista = await sql.query('SELECT max(id) FROM registroentradas')
    const listaTienda = await sql.query('SELECT nombreNegocio FROM tiendas WHERE usuarioId = ?', [ids])
    const listaProveedor = await sql.query('SELECT * FROM provedores WHERE usuarioId = ?', [ids])
    const listaProductos = await sql.query('SELECT * FROM productosCantidad')
    res.render('EntradasSalidas/entradas/entadaAgregar', { entrasLista, listaTienda, listaProveedor, listaProductos });
}

entradaSalida.mostrarSalida = async (req, res) => { 
    const ids = req.user.id
    const id = req.params.id
    const salidaLista = await sql.query('SELECT max(id) FROM registrosalidas')
    const listaTienda = await sql.query('SELECT nombreNegocio FROM tiendas WHERE usuarioId = ?', [ids])
    const listaProveedor = await sql.query('SELECT NombreProveedor FROM provedores WHERE usuarioId = ?', [ids])
    const listaProductos = await sql.query('SELECT * FROM detallelistaproductos WHERE listaProductoId = ?', [id])
    const productosLista = await sql.query('SELECT productoCantidad FROM productos WHERE tiendaId = ?', [ids])
    res.render('EntradasSalidas/salidas/salidasAgregar', { salidaLista, listaTienda, listaProveedor, listaProductos, productosLista });
}

module.exports = entradaSalida