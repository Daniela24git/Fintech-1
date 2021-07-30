const index = {};

const orm = require('../configuracionBaseDatos/baseDatos.orm')
const sql = require('../configuracionBaseDatos/baseDatos.sql')

index.mostrar = (req, res) => {
    res.render('index');
};

index.madar = async(req,res) => {
     const { Nombres } = req.body
     const verificacion = await orm.cliente.findOne({ where: { Nombres: Nombres }})
     if(verificacion){
         const clientes = verificacion
         if(clientes.username === null){
              res.redirect('/actualizacion/Datos/' + clientes.id);
         }else{
              res.redirect('/Login');
         }
     }else{
          res.redirect('/Registro');
     }
}

module.exports = index;