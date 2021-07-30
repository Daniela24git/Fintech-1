const productos = (sequelize, type)=>{
    return sequelize.define('productos', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        codigo: type.STRING(13),
        NombreProducto: type.STRING,
        Cantidad: type.INTEGER,
        UnidadMedida: type.STRING,
        precioVenta: type.FLOAT(6.2),
        FechaCadusidad: type.DATE,
        categoria: type.STRING,
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