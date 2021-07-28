const entradaSalida = {}

const orm = require('../configuracionBaseDatos/baseDatos.orm')
const sql = require('../configuracionBaseDatos/baseDatos.sql')

entradaSalida.mostrarEntradasSalidas= (req, res)=>{
    res.render('EntradasSalidas/entradasSalidas');
}

entradaSalida.mostrarEntrada = async(req,res)=>{
    const ids = req.user.id
    const NombreProvedor = req.body
    const entrasLista = await sql.query('SELECT max(codigo) FROM registroentradas')
    const listaTienda = await sql.query('SELECT nombreNegocio FROM tiendas WHERE usuarioId = ?', [ids])
    const listaProveedor = await sql.query('SELECT NombreProveedor FROM provedores WHERE usuarioId = ?', [ids])
    const listaProductos = sql.query('SELECT * FROM productoentradas WHERE NombreProvedor = ?', [NombreProvedor])
    console.log(NombreProvedor)
    res.render('EntradasSalidas/entradas/entadaAgregar', {entrasLista, listaTienda, listaProveedor, listaProductos});
}

module.exports= entradaSalida