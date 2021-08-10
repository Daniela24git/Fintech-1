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
const detalleCategoriasModelos = require('../modelos/detalleCategoria')
const registroSalidasModelos = require('../modelos/registroSalidas')
const unidadMedidasModelos = require('../modelos/unidadMedida')
const detalleClientesModelos = require('../modelos/detalleCliente')
const productoEntrada = require('../modelos/productoEntrada')

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
const detalleCategoria = detalleCategoriasModelos(sequelize, Sequelize)
const unidadMedidas = unidadMedidasModelos(sequelize, Sequelize)
const detalleCliente = detalleClientesModelos(sequelize, Sequelize)

//Relaciones 
//tienda-usuario
usuarios.hasMany(tienda)
tienda.belongsTo(usuarios)

//proveedor
usuarios.hasMany(provedor)
provedor.belongsTo(usuarios)

tienda.hasMany(provedor)
provedor.belongsTo(tienda)

//productoEtrada

provedor.hasMany(entredaProductos)
entredaProductos.belongsTo(provedor)

tienda.hasMany(entredaProductos)
entredaProductos.belongsTo(tienda)

usuarios.hasMany(entredaProductos)
entredaProductos.belongsTo(usuarios)

categoria.hasMany(entredaProductos)
entredaProductos.belongsTo(categoria)

unidadMedidas.hasMany(entredaProductos)
entredaProductos.belongsTo(unidadMedidas)

//productos

tienda.hasMany(productos)
productos.belongsTo(tienda)

usuarios.hasMany(productos)
productos.belongsTo(usuarios) 

//categoria
usuarios.hasMany(categoria)
categoria.belongsTo(usuarios)

//detalle categoria

usuarios.hasMany(detalleCategoria)
detalleCategoria.belongsTo(usuarios)

categoria.hasMany(detalleCategoria)
detalleCategoria.belongsTo(categoria)

//DETALLE CLIENTE
cliente.hasMany(detalleCliente)
detalleCliente.belongsTo(cliente)

usuarios.hasMany(detalleCliente)
detalleCliente.belongsTo(usuarios)

//unidad Medida
usuarios.hasMany(unidadMedidas)
unidadMedidas.belongsTo(usuarios)

//lista prodcutos
tienda.hasMany(listaProductos)
listaProductos.belongsTo(tienda)

cliente.hasMany(listaProductos)
listaProductos.belongsTo(cliente)

//detalleLista
listaProductos.hasMany(detalleListaProductos)
detalleListaProductos.belongsTo(listaProductos)

productos.hasMany(detalleListaProductos)
detalleListaProductos.belongsTo(productos)

//registro Entradas
tienda.hasMany(registroEntradas)
registroEntradas.belongsTo(tienda)

entredaProductos.hasMany(registroEntradas)
registroEntradas.belongsTo(entredaProductos)

tienda.hasMany(registroEntradas)
registroEntradas.belongsTo(tienda)

provedor.hasMany(registroEntradas)
registroEntradas.belongsTo(provedor)

usuarios.hasMany(registroEntradas)
registroEntradas.belongsTo(usuarios)

//registro Salidas
tienda.hasMany(registroSalidas)
registroSalidas.belongsTo(tienda)

productos.hasMany(registroSalidas)
registroSalidas.belongsTo(productos)

cliente.hasMany(registroSalidas)
registroSalidas.belongsTo(cliente)

usuarios.hasMany(registroSalidas)
registroSalidas.belongsTo(usuarios)

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
  registroEntradas,
  detalleCategoria,
  unidadMedidas,
  detalleCliente
}