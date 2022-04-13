const detallePago = (sequelize, type) =>{
    return sequelize.define ("detallePagos",{
        idDetallePago:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        valorPago: type.STRING,
        creacionDetallePago:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionDetallePago:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = detallePago