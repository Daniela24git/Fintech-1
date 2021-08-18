const registroEntradas = (sequelize, type)=>{
    return sequelize.define('registroEntradas',{
        idRegistroEntradas: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        entraCantidad: type.INTEGER,
        cantidadRestante: type.INTEGER,
        creacionRegistroEntradas:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionRegistroEntradas:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = registroEntradas