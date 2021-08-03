const compra = {}
const sql = require("../configuracionBaseDatos/baseDatos.sql")
const orm = require("../configuracionBaseDatos/baseDatos.orm")

compra.traer = async(req,res)=>{
    const id = req.params.id
    const producto = await sql.query('SELECT * FROM productos WHERE id = ?',[id])
    res.render('compras/compra',{producto});
}

compra.Mandar = async(req, res) =>{
    const id = req.params.id
    const{NombreProducto, Cantidad, categoria, UnidadMedida, FechaCadusidad, Precio, productoCantidad, codigo} = req.body
    const nuevaLista = {
        NombreProducto,
        Cantidad,
        categoria,
        UnidadMedida,
        FechaCadusidad,
        Precio,
        listaProductoId: id
    }
    const nuevaCantidad = {
        productoCantidad
    }
    await orm.detalleListaProductos.create(nuevaLista)
    await orm.productos.findOne({ where: { codigo: codigo } })
        .then(clientes => {
            clientes.update(nuevaCantidad)
            req.flash('success', 'Se añadio Correctamente');
            res.redirect('/producto/lista/' + id);
        })
}

module.exports = compra