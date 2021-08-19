const registroSalidas = (sequelize, type)=>{
    return sequelize.define('registroSalidas',{
        idRegistroSalidas: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
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