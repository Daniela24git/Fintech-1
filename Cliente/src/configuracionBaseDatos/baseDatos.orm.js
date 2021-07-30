const Sequelize = require('sequelize')

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