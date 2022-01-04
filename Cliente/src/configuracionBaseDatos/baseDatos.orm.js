const Sequelize = require('sequelize')
const mysql = require('mysql2/promise')

const dbName = process.env.DB_SCHEMAS || "fintech";

mysql.createConnection({
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || "3306",
    user     : process.env.DB_USER || "root",
    password : process.env.DB_PASSWORD || "",
}).then( connection => {
    connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`).then((res) => {
        console.info("Base de datos creada o comprobada correctamente");
    })
})

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
const detalleUnidadMedidaModelos = require('../modelos/detalleUnidadMedida');
const detalleRegistroEntradasModelos = require('../modelos/detalleRegistroEntradas');
const detalleRegistroSalidasModelos = require('../modelos/detalleRegistroSalidas');
const notaVentaModelo = require('../modelos/NotaVenta')
const FacturaModelo = require('../modelos/factura')

const sequelize = new Sequelize(
  'fintech',
  'root',
  '',
  {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      require: 30000,
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

sequelize.sync({ force: false })
  .then(() => {
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
const detalleUnidadMedidas =detalleUnidadMedidaModelos(sequelize, Sequelize)
const detalleRegistroEntradas = detalleRegistroEntradasModelos(sequelize, Sequelize)
const detalleRegistroSalidas = detalleRegistroSalidasModelos(sequelize,Sequelize)
const notaVenta = notaVentaModelo(sequelize, Sequelize)
const factura = FacturaModelo(sequelize, Sequelize)

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

entredaProductos.hasMany(productos)
productos.belongsTo(entredaProductos)

//unidadMedida
categoria.hasMany(unidadMedidas)
unidadMedidas.belongsTo(categoria)

//detalle categoria
categoria.hasMany(detalleCategoria)
detalleCategoria.belongsTo(categoria)

detalleCategoria.hasMany(productos)
productos.belongsTo(detalleCategoria)

//DETALLE CLIENTE
cliente.hasMany(detalleCliente)
detalleCliente.belongsTo(cliente)

usuarios.hasMany(detalleCliente)
detalleCliente.belongsTo(usuarios)

//Detalle unidad Medida
unidadMedidas.hasMany(detalleUnidadMedidas)
detalleUnidadMedidas.belongsTo(unidadMedidas)

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

provedor.hasMany(registroEntradas)
registroEntradas.belongsTo(provedor)

usuarios.hasMany(registroEntradas)
registroEntradas.belongsTo(usuarios)

//Detalle Registro Entradas

entredaProductos.hasMany(detalleRegistroEntradas)
detalleRegistroEntradas.belongsTo(entredaProductos)

registroEntradas.hasMany(detalleRegistroEntradas)
detalleRegistroEntradas.belongsTo(registroEntradas)

//registro Salidas
tienda.hasMany(registroSalidas)
registroSalidas.belongsTo(tienda)

cliente.hasMany(registroSalidas)
registroSalidas.belongsTo(cliente)

usuarios.hasMany(registroSalidas)
registroSalidas.belongsTo(usuarios)

//detalle Registro
productos.hasMany(detalleRegistroSalidas)
detalleRegistroSalidas.belongsTo(productos)

registroSalidas.hasMany(detalleRegistroSalidas)
detalleRegistroSalidas.belongsTo(registroSalidas)

//nota Venta
tienda.hasMany(notaVenta)
notaVenta.belongsTo(tienda)

cliente.hasMany(notaVenta)
notaVenta.belongsTo(cliente)

listaProductos.hasMany(notaVenta)
notaVenta.belongsTo(listaProductos)

//factura
tienda.hasMany(factura)
factura.belongsTo(tienda)

cliente.hasMany(factura)
factura.belongsTo(cliente)

listaProductos.hasMany(factura)
factura.belongsTo(listaProductos)

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
  detalleCliente,
  detalleUnidadMedidas,
  detalleRegistroEntradas,
  detalleRegistroSalidas,
  registroSalidas,
  notaVenta,
  factura
}