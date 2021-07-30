const listaProductos = (sequelize, type)=>{
    return sequelize.define('listaProductos',{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreLista: type.STRING,
        comentario: type.STRING(500),
        createdAt:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatedAt:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    })
}

module.exports = listaProductos