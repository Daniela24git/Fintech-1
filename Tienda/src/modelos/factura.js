const Factura = (sequelize, type)=>{
    return sequelize.define('Facturas',{
        idFactura :{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        valorTotal: type.STRING,
        creacionFactura:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionFactura:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = Factura