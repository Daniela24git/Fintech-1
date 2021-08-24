const detalleRegistroEntradas = (sequelize, type) => {
    return sequelize.define('detalleRegistroEntradas', {
        idDetalleRegistroEntradas: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        entraCantidad: type.INTEGER,
        cantidadRestante: type.INTEGER,
        creacionRegistroEntradas: type.STRING,
        actualizacionRegistroEntradas: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = detalleRegistroEntradas