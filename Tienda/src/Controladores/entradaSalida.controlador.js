const entradaSalida = {}

const orm = require('../configuracionBaseDatos/baseDatos.orm')
const sql = require('../configuracionBaseDatos/baseDatos.sql')

entradaSalida.mostrarEntradasSalidas = (req, res) => {
    res.render('EntradasSalidas/entradasSalidas');
}

entradaSalida.mostrarEntrada = async (req, res) => {
    const ids = req.user.idUsuarios
    const entrasLista = await sql.query('SELECT max(idRegistroEntradas) FROM registroentradas')
    const listaTienda = await sql.query('SELECT nombreNegocio FROM tiendas WHERE usuarioIdUsuarios = ?', [ids])
    const listaProveedor = await sql.query('SELECT * FROM provedores WHERE usuarioIdUsuarios = ?', [ids])
    const listaProductos = await sql.query('SELECT DISTINCT v.productoCantidad, p.*, u.unidadMedida FROM productoentradas p JOIN unidadmedidas u ON u.idUnidadMedidas = p.unidadMedidaIdUnidadMedidas JOIN productos v ON p.idProductoEntradas = v.productoEntradaIdProductoEntradas WHERE p.tiendaIdTiendas = ?', [ids])
    res.render('EntradasSalidas/entradas/entadaAgregar', { listaTienda, listaProveedor, listaProductos, entrasLista });
}

entradaSalida.mandarEntrada = async(req, res) => {
    const id = req.params.id
    const ids = req.user.idUsuarios
    const {entraCantidad, cantidadRestante, registroEntradaIdRegistroEntradas, productoEntradaIdProductoEntradas, provedoreIdProvedores} = req.body
    
    const nuevaEntrada = {
        tiendaIdTiendas: ids,
        provedoreIdProvedores: id,
        usuarioIdUsuarios: ids
    }

    const nuevaDetalleEntrada={
        entraCantidad,
        cantidadRestante,
        productoEntradaIdProductoEntradas: productoEntradaIdProductoEntradas,
        registroEntradaIdRegistroEntradas: registroEntradaIdRegistroEntradas
    }

    await orm.registroEntradas.create(nuevaEntrada)
    await orm.detalleRegistroEntradas.create(nuevaDetalleEntrada)
    req.flash('success', 'Exito al Guardar')
     res.redirect('/entradaSalida/Salidas/Lista/' + ids);
}

entradaSalida.mostrarSalida = async (req, res) => { 
    const ids = req.user.idUsuarios
    const id = req.params.id
    const salidaLista = await sql.query('SELECT max(idRegistroSalidas) FROM registrosalidas')
    const listaTienda = await sql.query('SELECT nombreNegocio FROM tiendas WHERE usuarioIdUsuarios = ?', [ids])
    const listaProveedor = await sql.query('SELECT NombreProveedor FROM provedores WHERE idListaProductos = ?', [ids])
    const listaProductos = await sql.query('SELECT * FROM detallelistaproductos WHERE listaProductoId = ?', [id])
    const productosLista = await sql.query('SELECT productoCantidad FROM productos WHERE tiendaIdTiendas = ?', [ids])
    res.render('EntradasSalidas/salidas/salidasAgregar', { salidaLista, listaTienda, listaProveedor, listaProductos, productosLista });
}

module.exports = entradaSalida