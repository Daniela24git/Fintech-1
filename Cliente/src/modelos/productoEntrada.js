const productoEntrada = (sequelize, type)=>{
    return sequelize.define('productoEntradas', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        codigo: type.STRING(13),
        NombreProducto: type.STRING,
        NombreProvedor: type.STRING,
        Cantidad: type.INTEGER,
        UnidadMedida: type.STRING,
        precioActual: type.FLOAT(6.2),
        FechaCadusidad: type.DATE,
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

module.exports = productoEntrada