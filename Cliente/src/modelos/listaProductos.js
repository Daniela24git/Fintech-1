const listaProductos = (sequelize, type)=>{
    return sequelize.define('listaProductos',{
        idListaProductos:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreLista: type.STRING,
        comentario: type.STRING(500),
        creacionListaProductos:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionListaProductos:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = listaProductos