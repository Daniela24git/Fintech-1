const Sequelize = require('sequelize')

const categoriaModelos = require('../modelos/Categoria')
const tiendaModelos = require('../modelos/tienda')
const listaProductosModelos = require('../modelos/listaProductos')
const clienteModelos = require('../modelos/cliente')
const detalleListaProductosModelos = require('../modelos/detalleListaProductos') 

const sequelize = new Sequelize(
    'fintech', 
    'root', 
    '', 
    {
    host: 'localhost',
    dialect: 'mysql',
    pool:{
      max:5,
      min:0,
      require:30000,
      idle: 10000
     }
    }
  )
  
  sequelize.authenticate()
    .then(() => {
      console.log('Conectado')
    })
    .catch(err => {
      console.log('No se conecto')
    })
  
    sequelize.sync({ force: false})
    .then(() =>{
      console.log("Tablas sincronizadas")
    })

const categoria = categoriaModelos(sequelize, Sequelize)
const tienda = tiendaModelos(sequelize, Sequelize)
const listaProductos = listaProductosModelos(sequelize, Sequelize)
const cliente = clienteModelos(sequelize, Sequelize)
const detalleListaProductos = detalleListaProductosModelos(sequelize, Sequelize)

module.exports = {
  categoria,
  tienda,
  listaProductos,
  cliente,
  detalleListaProductos
}