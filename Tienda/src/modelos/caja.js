const caja = (sequelize, type) =>{
    return sequelize.define ("Cajas", {
        idCaja:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        valorTotalCaja: type.STRING,
        fechaCaja: type.STRING,
        creacionCaja:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionCaja:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = caja