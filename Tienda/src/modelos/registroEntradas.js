const registroEntradas = (sequelize, type)=>{
    return sequelize.define('registroEntradas',{
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        entraCantidad: type.INTEGER,
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

module.exports = registroEntradas