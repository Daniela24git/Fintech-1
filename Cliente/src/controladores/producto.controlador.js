const productos = {}

const sql = require("../configuracionBaseDatos/baseDatos.sql")
const orm = require("../configuracionBaseDatos/baseDatos.orm")

productos.calidad = async (req, res) => {
    const id = req.params.id
    const listaProductos = await sql.query("SELECT * FROM productos WHERE tiendaId = ?", [id])
    const lista = await sql.query("SELECT * FROM detallelistaproductos WHERE listaProductoId = ?", [id])
    const tienda = await sql.query("SELECT * FROM Tiendas where id = ?", [id])
    const NombreLista = await sql.query('SELECT nombreLista FROM listaproductos WHERE tiendaId = ?', [id])
    res.render("productos/productos", { listaProductos, lista, tienda, NombreLista })
}

productos.Mandar = async (req,res)  => {
    const id = req.params.id
    const ids = req.user.id
    const { nombreLista }= req.body
    const nuevaLista = {
        nombreLista,
        tiendaId: id,
        clienteId: ids
    }
    await orm.listaProductos.create(nuevaLista)
    res.redirect('/producto/lista/'+ id);
}

    module.exports = productos