const formaPago = {}
const sql = require("../configuracionBaseDatos/baseDatos.sql")
const orm = require("../configuracionBaseDatos/baseDatos.orm")


formaPago.traer = async(req,res)=>{
    const datos = await sql.query("SELECT * FROM tiendas")
    const cliente = await sql.query("SELECT * FROM clientes")
    const lista = await sql.query("SELECT * FROM detallelistaproductos")
    res.render("formasPago/notaVenta", {datos, cliente, lista});
}

module.exports=formaPago