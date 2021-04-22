const compra = {}
const pool = require('../database')

compra.traer = async(req,res)=>{
    const {id} = req.params
    const producto = await pool.query('SELECT * FROM producto WHERE id = ?',[id])
    res.render('compras/compra',{producto});
}

compra.Mandar = async(req, res) =>{
    const {id} = req.params
    const{Nombre, Cantidades, Precio} = req.body
    const nuevaLista = {
        Nombre,
        Cantidades,
        Precio,
        Cliente: req.user.id
    }
    await pool.query('INSERT INTO lista set ?', [nuevaLista])
    req.flash("succes", "Se añadio correctamente")
     res.redirect('/tienda/lista');
}

module.exports = compra