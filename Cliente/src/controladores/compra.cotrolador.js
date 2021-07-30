const compra = {}
const pool = require('../configuracionBaseDatos/baseDatos.sql')

compra.traer = async(req,res)=>{
    const {id} = req.params
    const producto = await pool.query('SELECT * FROM productos WHERE id = ?',[id])
    res.render('compras/compra',{producto});
}

compra.Mandar = async(req, res) =>{
    const {id} = req.params
    const{Nombre, Cantidad, Precio} = req.body
    const nuevaLista = {
        Nombre,
        Cantidad,
        Precio,
        Cliente: req.user.id
    }
    await pool.query('INSERT INTO detallelistaproductos set ?', [nuevaLista])
    req.flash("succes", "Se añadio correctamente")
     res.redirect('/tienda/lista');
}

module.exports = compra