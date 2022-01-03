const formaPago = {}
const sql = require("../configuracionBaseDatos/baseDatos.sql")
const orm = require("../configuracionBaseDatos/baseDatos.orm")


formaPago.traer = async(req,res)=>{
    const id = req.params.id
    const ids = req.user.idClientes
    const datos = await sql.query("SELECT * FROM tiendas where idTiendas = ?", [id])
    const cliente = await sql.query("SELECT * FROM clientes where idClientes = ?", [ids])
    const lista = await sql.query("SELECT * FROM listacompras")
    res.render("formasPago/notaVenta", {datos, cliente, lista});
}

module.exports=formaPago