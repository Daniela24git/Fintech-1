const detalleRegistroEntradas = (sequelize, type) => {
    return sequelize.define('detalleRegistroEntradas', {
        idDetalleRegistroEntradas: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        entraCantidad: type.INTEGER,
        cantidadRestante: type.INTEGER,
        creacionRegistroEntradas: type.STRING
    }, {
        timestamps: false,
    })
}

module.exports = detalleRegistroEntradas