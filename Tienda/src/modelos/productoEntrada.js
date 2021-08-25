const productoEntrada = (sequelize, type)=>{
    return sequelize.define('productoEntradas', {
        idProductoEntradas: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        codigo: type.STRING(13),
        NombreProducto: type.STRING,
        Cantidad: type.INTEGER,
        precioActual: type.FLOAT(6.2),
        FechaCadusidad: type.STRING,
        creacionProductoEntradas:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionProductoEntradas:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = productoEntrada