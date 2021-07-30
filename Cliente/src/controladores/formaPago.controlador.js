const formaPago = {}
const pool = require("../configuracionBaseDatos/baseDatos.sql")


formaPago.traer = async(req,res)=>{
    const datos = await pool.query("SELECT * FROM tiendas")
    const cliente = await pool.query("SELECT * FROM clientes")
    const lista = await pool.query("SELECT * FROM detallelistaproductos")
    res.render("formasPago/notaVenta", {datos, cliente, lista});
}

module.exports=formaPago