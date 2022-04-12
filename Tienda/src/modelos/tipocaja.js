const tipoCaja = (sequelize, type) =>{
    return sequelize.define ("tipoCajas", {
        idtipoCaja:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombreTipoCaja: type.STRING,
        valorTotalTipoCaja: type.STRING,
        creacionTipoCaja:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionTipoCaja:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = tipoCaja