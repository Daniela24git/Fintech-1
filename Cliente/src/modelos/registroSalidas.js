const registroSalidas = (sequelize, type)=>{
    return sequelize.define('registroSalidas',{
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        codigo: type.INTEGER,
        codigoProducto: type.STRING,
        nombreCliente: type.STRING,
        unidadMedida: type.STRING,
        salidaCantidad: type.INTEGER,
        cantidadRestante: type.INTEGER,
        createdAt:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatedAt:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    })
}

module.exports = registroSalidas