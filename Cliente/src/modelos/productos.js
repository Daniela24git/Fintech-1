const productos = (sequelize, type)=>{
    return sequelize.define('productos', {
        idProductos: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        productoCantidad: type.INTEGER,
        precioVenta: type.FLOAT(6.2),
        createdAt:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatedAt:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    })
}

module.exports = productos