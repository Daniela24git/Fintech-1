const ProductoEntradaCtrl = {};

const orm = require('../configuracionBaseDatos/baseDatos.orm')
const sql = require('../configuracionBaseDatos/baseDatos.sql')

ProductoEntradaCtrl.renderEntrada = async (req, res) => {
    const id = req.params.id
    const listaProveedor = await sql.query("SELECT * FROM provedores WHERE id = ?", [id])
    res.render("ProductosEntrada/agregar", {listaProveedor})
}

ProductoEntradaCtrl.addEntrada = async (req, res) => {
    const id = req.params.id
    const IDS = req.user.id
    const { NombreProducto, NombreProvedor, codigo, categoria, UnidadMedida, Cantidad, productoCantidad, precioActual, FechaCadusidad, precioVenta } = req.body
    const NuevaEntrada = {
        codigo,
        NombreProducto,
        NombreProvedor,
        Cantidad,
        UnidadMedida,
        precioActual,
        FechaCadusidad,
        provedoreId: id,
        tiendaId: IDS
    }
    const NuevaCategoria ={
        categoria,
        usuarioId: IDS
    }
    const productoVenta={
        codigo,
        NombreProducto,
        productoCantidad,
        UnidadMedida,
        precioVenta,
        FechaCadusidad,
        categoria,
        tiendaId: IDS
    }
    await orm.entredaProductos.create(NuevaEntrada);
    await orm.categoria.create(NuevaCategoria);
    await orm.productos.create(productoVenta);
    req.flash('success', "Se guardo correctamente")
    res.redirect("/ProductoEntrada/lista/" + IDS)
}

ProductoEntradaCtrl.renderProductos = async (req, res) => {
    const id = req.params.id
    const DatosProducto = await sql.query("SELECT * FROM productoEntradas WHERE tiendaId = ?", [id])
    res.render("ProductosEntrada/lista", { DatosProducto })

}

ProductoEntradaCtrl.EliminarProductos = async (req, res) => {
    const id  = req.params.id;
    await orm.entredaProductos.destroy({ where: { id: id } });
    await orm.productos.destroy({ where: { id: id } });
    await orm.categoria.destroy({ where: { id: id } });
    req.flash('success', 'Se Elimino Correctamente');
    res.redirect('/ProductoEntrada/lista/' + id);

}
ProductoEntradaCtrl.renderEditarEntrada = async (req, res) => {
    const id = req.params.id;
    const Productos = await sql.query("SELECT * FROM productoEntradas WHERE id =?", [id])
    res.render("ProductosEntrada/editar", {Productos})
}
ProductoEntradaCtrl.EditarEntrada = async (req, res) => {
    const IDS = req.user.id
    const id = req.params.id
    const { NombreProducto, Cantidad, precioActual, FechaCadusidad } = req.body
    const EntradaEditad = {
        NombreProducto,
        Cantidad,
        precioActual,
        FechaCadusidad
    }

    await orm.entredaProductos.findOne({ where: { id: id } })
        .then(productoEntrada => {
            productoEntrada.update(EntradaEditad)
            req.flash('success', 'Se Actualizo Correctamente');
            res.redirect('/ProductoEntrada/lista/' + IDS);
        })
}
module.exports = ProductoEntradaCtrl
