const diaPago = (sequelize, type) =>{
    return sequelize.define ("diaPagos", {
        idDiaPago:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombrePago: type.STRING,
        valorTotalPago: type.STRING,
        creaciondiaPago:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizaciondiaPago:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = diaPago