const detalleCaja = (sequelize, type) => {
    return sequelize.define ("detalleCajas",{
        idDetalleCaja:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombreCaja : type.STRING,
        valorCaja: type.STRING,
        creacionDetalleCaja:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionDetalleCaja:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = detalleCaja