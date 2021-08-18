const registroSalidas = (sequelize, type)=>{
    return sequelize.define('registroSalidas',{
        idRegistroSalidas: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        salidaCantidad: type.INTEGER,
        cantidadRestante: type.INTEGER,
        creacionRegistroSalidas:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionRegistroSalidas:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = registroSalidas