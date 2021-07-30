const productos={}
const pool=require("../configuracionBaseDatos/baseDatos.sql")

productos.calidad=async(req,res)=>{
    const {id} = req.params
    const listaProductos = await pool.query("SELECT * FROM productos WHERE tiendaId = ?", [id])
    const lista = await pool.query("SELECT * FROM detallelistaproductos")
    const tienda = await pool.query("SELECT * FROM Tiendas where id = ?", [id])
    res.render("productos/productos",{listaProductos, lista, tienda})
}

module.exports=productos