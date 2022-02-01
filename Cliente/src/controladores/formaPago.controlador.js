const formaPago = {}
const sql = require("../configuracionBaseDatos/baseDatos.sql")
const orm = require("../configuracionBaseDatos/baseDatos.orm")


formaPago.traer = async(req,res)=>{
    const id = req.params.id
    const ids = req.user.idClientes
    const datos = await sql.query("SELECT * FROM tiendas where idTiendas = ?", [id])
    const cliente = await sql.query("SELECT * FROM clientes where idClientes = ?", [ids])
    const lista = await sql.query("SELECT * FROM listacompras")
    const unico = await sql.query("SELECT DISTINCT(listaProductoIdListaProductos) FROM listacompras where clienteIdClientes =?", [ids])
    const numero = await sql.query("select max(idNotaVenta) from notaventas")
    res.render("formasPago/notaVenta", {datos, cliente, lista, numero, unico});
}

formaPago.Mandar = async(req, res)=>{
    const {valorTotal, numero, idTiendas, idclientes, listaProductoIdListaProductos} = req.body
    const ingreso = {
        idNotaVenta: numero,
        valorTotal: valorTotal,
        tiendaIdTiendas: idTiendas,
        clienteIdClientes: idclientes,
        listaProductoIdListaProductos: listaProductoIdListaProductos,
    }
    await orm.notaVenta.create(ingreso)
     res.redirect('/perfil/Cliente/'+ idclientes);
}

formaPago.traerDatos = async(req,res)=>{
    const id = req.params.id
    const ids = req.user.idClientes
    const datos = await sql.query("SELECT * FROM tiendas where idTiendas = ?", [id])
    const cliente = await sql.query("SELECT * FROM clientes where idClientes = ?", [ids])
    const lista = await sql.query("SELECT * FROM listacompras")
    const unico = await sql.query("SELECT DISTINCT(listaProductoIdListaProductos) FROM listacompras where clienteIdClientes =?", [ids])
    const numero = await sql.query("select max(idFactura) from facturas")
    res.render("formasPago/factura", {datos, cliente, lista, numero, unico});
}

formaPago.MandarDatos = async(req, res)=>{
    const {valorTotal, numero, idTiendas, idclientes, listaProductoIdListaProductos} = req.body
    const ingreso = {
        idFactura: numero,
        valorTotal: valorTotal,
        tiendaIdTiendas: idTiendas,
        clienteIdClientes: idclientes,
        listaProductoIdListaProductos: listaProductoIdListaProductos,
    }
    await orm.factura.create(ingreso)
     res.redirect('/perfil/Cliente/'+ idclientes);
}

module.exports = formaPago