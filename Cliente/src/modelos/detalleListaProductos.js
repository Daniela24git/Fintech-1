const detalleListaProductos = (sequelize, type)=>{
    return sequelize.define('detalleListaProductos', {
        idDetalleListaProductos: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Cantidad: type.INTEGER,
        Precio: type.FLOAT(6.2),
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


module.exports = detalleListaProductos