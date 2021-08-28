const productos = (sequelize, type)=>{
    return sequelize.define('productos', {
        idProductos: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        productoCantidad: type.INTEGER,
        precioVenta: type.FLOAT(6.2),
        precioTotalVenta: type.FLOAT(6.2),
        creacionProductos:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionProductos:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = productos