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

entradaSalida.mandarEntrada = async (req, res) => {
    const id = req.params.id
    const ids = req.user.idUsuarios
    const { fecha, entraCantidad, cantidadRestante, registroEntradaIdRegistroEntradas, productoEntradaIdProductoEntradas, provedoreIdProvedores } = req.body

    const nuevaEntrada = {
        tiendaIdTiendas: ids,
        provedoreIdProvedores: id,
        usuarioIdUsuarios: ids
    }

    const nuevaDetalleEntrada = {
        entraCantidad,
        cantidadRestante,
        creacionRegistroEntradas: fecha,
        productoEntradaIdProductoEntradas: productoEntradaIdProductoEntradas,
        registroEntradaIdRegistroEntradas: registroEntradaIdRegistroEntradas
    }

    await orm.registroEntradas.create(nuevaEntrada)
    await orm.detalleRegistroEntradas.create(nuevaDetalleEntrada)
    req.flash('success', 'Exito al Guardar')
    res.redirect('/entradaSalida/Salidas/Lista/' + ids);
}

entradaSalida.listaEntrada = async (req, res) => {
    const id = req.user.idUsuarios
    const lista = await sql.query('SELECT * FROM registroentradas WHERE usuarioIdUsuarios = ?', [id])
    res.render('EntradasSalidas/entradas/lista', { lista });
}

entradaSalida.detallelistaEntrada = async (req, res) => {
    const id = req.params.id
    const lista = await sql.query('SELECT * FROM detalleregistroentradas WHERE registroEntradaIdRegistroEntradas = ?', [id])
    res.render('EntradasSalidas/entradas/detalleLista', { lista });
}

entradaSalida.mostrarSalida = async (req, res) => {
    const ids = req.user.idUsuarios
    const id = req.params.id
    const salidaLista = await sql.query('SELECT max(idRegistroSalidas) FROM registrosalidas')
    const listaTienda = await sql.query('SELECT nombreNegocio FROM tiendas WHERE IdTiendas = ?', [ids])
    const listaClientes = await sql.query('SELECT * FROM Clientes WHERE idClientes = ?', [ids])
    const listaProductos = await sql.query('SELECT * FROM listaSalidas  WHERE listaProductoIdListaProductos = ?', [id])
    res.render('EntradasSalidas/salidas/salidasAgregar', { salidaLista, listaTienda, listaClientes, listaProductos });
}

entradaSalida.MandarSalida = async (req, res) => {
    const id = req.params.id
    const ids = req.user.idUsuarios
    const { fecha, salidaCantidad, ventaCantidad, cantidadRestante, Precio, productoIdProductos, registroSalidaIdRegistroSalidas, clienteIdClientes, tiendaIdTiendas } = req.body
    const nuevaSalida = {
        tiendaIdTiendas: tiendaIdTiendas,
        clienteIdClientes: clienteIdClientes,
        usuarioIdUsuarios: ids,
        registroSalidaIdRegistroSalidas: registroSalidaIdRegistroSalidas
    }
    const nuevoDetalleSalida = {
        fecha,
        salidaCantidad,
        ventaCantidad,
        cantidadRestante,
        Precio,
        productoIdProductos: productoIdProductos
    }

    await orm.registroSalidas.create(nuevaSalida)
    await orm.detalleRegistroSalidas.create(nuevoDetalleSalida)
    req.flash('success', 'Exito al Guardar')
    res.redirect('/entradaSalida/Salidas/Lista/' + ids);
}

entradaSalida.ListaSalidas = async (req, res) => {
    const id = req.user.idUsuarios
    const lista = await sql.query('SELECT * FROM registrosalidas WHERE usuarioIdUsuarios = ?', [id])
    res.render('EntradasSalidas/salidas/lista', { lista });
}

entradaSalida.detallelistaSalidas = async (req, res) => {
    const id = req.params.id
    const lista = await sql.query('SELECT * FROM detalleregistrosalidas WHERE registroSalidaIdRegistroSalidas = ?', [id])
    res.render('EntradasSalidas/salidas/detalleLista', { lista });
}

module.exports = entradaSalida