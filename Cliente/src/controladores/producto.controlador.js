const productos={}
const pool=require("../configuracionBaseDatos/baseDatos.sql")

productos.calidad=async(req,res)=>{
    const {id} = req.params
    const listaProductos = await pool.query("SELECT * FROM producto WHERE Tienda = ?", [id])
    const lista = await pool.query("SELECT * FROM lista")
    const tienda = await pool.query("SELECT * FROM tienda where id = ?", [id])
    res.render("productos/productos",{listaProductos, lista, tienda})
}

module.exports=productos