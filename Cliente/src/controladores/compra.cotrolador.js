const compra = {}
const sql = require("../configuracionBaseDatos/baseDatos.sql")
const orm = require("../configuracionBaseDatos/baseDatos.orm")

compra.traer = async(req,res)=>{
    const id = req.params.id
    const ids = await sql.query('SELECT MAX(idListaProductos) FROM listaproductos')
    const producto = await sql.query('SELECT * FROM productoscantidad WHERE idProductos = ?',[id])
    res.render('compras/compra',{producto, ids});
}

compra.Mandar = async(req, res) =>{
    const ids = req.user.idClientes
    const{id, Cantidad, Precio, productoCantidad, idListaProductos} = req.body
    const nuevaLista = {
        Cantidad,
        Precio,
        productoIdProductos: id,
        listaProductoIdListaProductos: idListaProductos
    }
    const nuevaCantidad = {
        productoCantidad
    }
    await orm.detalleListaProductos.create(nuevaLista)
    await orm.productos.findOne({ where: { productoEntradaIdProductoEntradas: id } })
        .then(productos => {
            productos.update(nuevaCantidad)
            req.flash('success', 'Se añadio Correctamente');
            res.redirect('/producto/lista/' + ids);
        })
}

module.exports = compra 