const lista = {}

const pool = require("../configuracionBaseDatos/baseDatos.sql")

lista.mostrar = (req, res) => {
    res.render("productos/lista");
}

lista.Lista = async (req, res) => {
    const id = req.params.id
    const lista = await pool.query("SELECT NombreProducto, Cantidad, Precio  FROM listacompras ")
    const tienda = await pool.query("SELECT * FROM  tiendas WHERE idTiendas = ?", [id])
    res.render("productos/lista", { lista, tienda });
}

lista.Eliminar = async (req, res) => {
    const { id } = req.params
    await pool.query("DELETE FROM detallelistaproductos WHERE ID = ?", [id])
    req.flash('success', "Eliminacion correcta")
    res.redirect('/producto/Compra/listaCompleta');
}

module.exports = lista