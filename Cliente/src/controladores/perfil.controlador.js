const perfil = {}
const sql = require("../configuracionBaseDatos/baseDatos.sql")

perfil.mostrar = async(req, res)=>{
    const ids = req.user.idClientes
    const cliente = await sql.query("SELECT * FROM clientes where idClientes = ?", [ids])
    const nota = await sql.query("select * from notaventas where clienteIdClientes = ?", [ids])
    const Facturas = await sql.query("select * from facturas where clienteIdClientes = ?", [ids])
    res.render('perfil/perfil', {cliente, nota, Facturas});
}

module.exports = perfil