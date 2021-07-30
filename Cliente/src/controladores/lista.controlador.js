const lista = {}

const pool = require("../configuracionBaseDatos/baseDatos.sql")

lista.mostrar = (req, res) => {
    res.render("productos/lista");
}

lista.Lista = async (req, res) => {
    const {id} = req.params
    const lista = await pool.query("SELECT id, Nombre, Cantidad, Precio  FROM lista ")
    const tienda = await pool.query("SELECT * FROM  tienda WHERE id = ?", [id])
    res.render("productos/lista", { lista, tienda });
}

lista.Eliminar = async (req, res) => {
    const { id } = req.params
    await pool.query("DELETE FROM lista WHERE ID = ?", [id])
    req.flash('success', "Eliminacion correcta")
    res.redirect('/producto/Compra/listaCompleta');
}

module.exports = lista