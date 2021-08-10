const registroSalidas = (sequelize, type)=>{
    return sequelize.define('registroSalidas',{
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
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