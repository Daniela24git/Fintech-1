const detalleUnidadMedida = (sequelize, type) => {
    return sequelize.define('detalleUnidadMedidas', {
        idDetalleUnidadMedidas:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        cantidadMedida: type.FLOAT(6.2),
        precioVentaUnidad: type.FLOAT(6.2),
        creacionDetalleUnidadMedidas:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionDetalleUnidadMedidas:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = detalleUnidadMedida