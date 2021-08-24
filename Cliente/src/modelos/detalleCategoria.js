const detalleCategoria = ( sequelize, type) => {
    return sequelize.define('detalleCategorias', {
        idDetalleCategorias:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        unidadVeneta: type.STRING,
        cantidadVenta: type.INTEGER,
        creacionDetalleCategorias:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionDetalleCategorias:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = detalleCategoria