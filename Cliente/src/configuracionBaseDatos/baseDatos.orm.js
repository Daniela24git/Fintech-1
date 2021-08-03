const Sequelize = require('sequelize')

const UsuarioModelos = require('../modelos/usuario')
const categoriaModelos = require('../modelos/Categoria')
const tiendaModelos = require('../modelos/tienda')
const listaProductosModelos = require('../modelos/listaProductos') 
const provedorModelos = require('../modelos/provedor')
const productoEntradaModelos = require('../modelos/productoEntrada')
const productoModelos = require('../modelos/productos')
const clienteModelos = require('../modelos/cliente')
const detalleListaProductosModelos = require('../modelos/detalleListaProductos')
const registroEntradasModelos = require('../modelos/registroEntradas')
const registroSalidasModelos = require('../modelos/registroSalidas')

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

const usuarios = UsuarioModelos(sequelize, Sequelize)
const categoria = categoriaModelos(sequelize, Sequelize)
const tienda = tiendaModelos(sequelize, Sequelize)
const listaProductos = listaProductosModelos(sequelize, Sequelize)
const provedor = provedorModelos(sequelize, Sequelize)
const entredaProductos = productoEntradaModelos(sequelize, Sequelize)
const productos = productoModelos(sequelize, Sequelize)
const cliente = clienteModelos(sequelize, Sequelize)
const detalleListaProductos = detalleListaProductosModelos(sequelize, Sequelize) 
const registroEntradas = registroEntradasModelos(sequelize, Sequelize)
const registroSalidas = registroSalidasModelos(sequelize, Sequelize)

usuarios.hasMany(categoria)
categoria.belongsTo(usuarios)

usuarios.hasMany(tienda)
tienda.belongsTo(usuarios)

tienda.hasMany(listaProductos)
listaProductos.belongsTo(tienda)

cliente.hasMany(listaProductos)
listaProductos.belongsTo(cliente)

usuarios.hasMany(provedor)
provedor.belongsTo(usuarios)

provedor.hasMany(entredaProductos)
entredaProductos.belongsTo(provedor)

tienda.hasMany(productos)
productos.belongsTo(tienda)

listaProductos.hasMany(detalleListaProductos)
detalleListaProductos.belongsTo(listaProductos)

tienda.hasMany(entredaProductos)
entredaProductos.belongsTo(tienda)

entredaProductos.hasMany(categoria)
categoria.belongsTo(entredaProductos)

tienda.hasMany(registroEntradas)
registroEntradas.belongsTo(tienda)

tienda.hasMany(registroSalidas)
registroSalidas.belongsTo(tienda)

module.exports = {
  usuarios,
  categoria,
  tienda,
  detalleListaProductos,
  provedor,
  entredaProductos,
  productos,
  cliente,
  listaProductos,
  registroEntradas
}