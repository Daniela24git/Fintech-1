const lista = {}

const pool = require("../configuracionBaseDatos/baseDatos.sql")

lista.mostrar = (req, res) => {
    res.render("productos/lista");
}

lista.Lista = async (req, res) => {
    const {id} = req.params
    const lista = await pool.query("SELECT id, NombreProducto, Cantidad, Precio  FROM detallelistaproductos ")
    const tienda = await pool.query("SELECT * FROM  tiendas WHERE id = ?", [id])
    res.render("productos/lista", { lista, tienda });
}

lista.Eliminar = async (req, res) => {
    const { id } = req.params
    await pool.query("DELETE FROM detallelistaproductos WHERE ID = ?", [id])
    req.flash('success', "Eliminacion correcta")
    res.redirect('/producto/Compra/listaCompleta');
}

module.exports = lista