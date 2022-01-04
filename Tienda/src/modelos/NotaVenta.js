const notaVenta = (sequelize, type)=>{
    return sequelize.define('NotaVentas',{
        idNotaVenta :{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        valorTotal: type.STRING,
        creacionNotaVentas:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionNotaVentass:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = notaVenta