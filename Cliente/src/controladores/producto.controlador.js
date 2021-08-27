const productos = {}

const sql = require("../configuracionBaseDatos/baseDatos.sql")
const orm = require("../configuracionBaseDatos/baseDatos.orm")

productos.calidad = async (req, res) => {
    const id = req.params.id
    const listaProductos = await sql.query("SELECT * FROM productoslista WHERE tiendaIdTiendas = ?", [id]) 
    const lista = await sql.query("SELECT * FROM listaCompras  WHERE listaProductoIdListaProductos = ?", [id])
    const tienda = await sql.query("SELECT * FROM Tiendas where idTiendas = ?", [id])
    const NombreLista = await sql.query('SELECT nombreLista FROM listaproductos WHERE tiendaIdTiendas = ?', [id])
    res.render("productos/productos", { listaProductos, lista, tienda, NombreLista })
}

productos.Mandar = async (req,res)  => {
    const id = req.params.id
    const ids = req.user.idClientes
    const { nombreLista }= req.body
    const nuevaLista = {
        nombreLista,
        tiendaIdTiendas: id,
        clienteIdClientes: ids
    }
    await orm.listaProductos.create(nuevaLista)
    res.redirect('/producto/lista/'+ id);
}

    module.exports = productos