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
    const ids = req.user.idUsuarios
    const { fecha, entraCantidad, cantidadRestante, idRegistroEntradas, productoEntradaIdProductoEntradas, provedoreIdProvedores } = req.body

    const nuevaEntrada = {
        tiendaIdTiendas: ids,
        provedoreIdProvedores: provedoreIdProvedores,
        usuarioIdUsuarios: ids,
        creacionRegistroEntradas: fecha 
    }
    await orm.registroEntradas.create(nuevaEntrada)
    for(let i = 0; i < productoEntradaIdProductoEntradas.length; i++){
        await sql.query('INSERT INTO detalleregistroentradas(entraCantidad,cantidadRestante,creacionRegistroEntradas,registroEntradaIdRegistroEntradas,productoEntradaIdProductoEntradas) VALUES (?,?,?,?,?)',[entraCantidad[i],cantidadRestante[i],fecha,idRegistroEntradas,productoEntradaIdProductoEntradas[i]])
    }
    req.flash('success', 'Exito al Guardar')
    res.redirect('/entradaSalida/entradas/Lista/' + ids);
}

entradaSalida.listaEntrada = async (req, res) => {
    const id = req.user.idUsuarios
    const lista = await sql.query('SELECT * FROM registroentradas WHERE usuarioIdUsuarios = ?', [id])
    res.render('EntradasSalidas/entradas/lista', { lista });
}

entradaSalida.detallelistaEntrada = async (req, res) => {
    const id = req.params.id
    const lista = await sql.query('SELECT * FROM detatalleentradaproductos WHERE registroEntradaIdRegistroEntradas = ?', [id])
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
    const { fecha, salidaCantidad, ventaCantidad, cantidadRestante, Precio, productoIdProductos, idregistros, clienteIdClientes  } = req.body
    const nuevaSalida = {
        tiendaIdTiendas: id,
        creacionRegistroSalidas: fecha,
        clienteIdClientes: clienteIdClientes, 
        usuarioIdUsuarios: ids
    }
    await orm.registroSalidas.create(nuevaSalida)
    for(let i = 0; i < productoIdProductos.length; i++){
        await sql.query('INSERT INTO detalleregistrosalidas(Precio,ventaCantidad,salidaCantidad,cantidadRestante,creacionDetalleRegistroSalidas,productoIdProductos,registroSalidaIdRegistroSalidas) VALUES (?,?,?,?,?,?,?)',[Precio[i],ventaCantidad[i],salidaCantidad,cantidadRestante[i],fecha,productoIdProductos,idregistros ])
    }
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
    const lista = await sql.query('SELECT * FROM salidaProductos WHERE registroSalidaIdRegistroSalidas = ?', [id])
    res.render('EntradasSalidas/salidas/detalleLista', { lista });
}

module.exports = entradaSalida