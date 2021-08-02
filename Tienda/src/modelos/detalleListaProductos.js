const detalleListaProductos = (sequelize, type)=>{
    return sequelize.define('detalleListaProductos', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        NombreProducto: type.STRING,
        Cantidad: type.INTEGER,
        Precio: type.FLOAT(6.2),
        Descripcion: type.STRING,
        UnidadMedida: type.STRING,
        categoria: type.STRING,
        FechaCadusidad: type.STRING,
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