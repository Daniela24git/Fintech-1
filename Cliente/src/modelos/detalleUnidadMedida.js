const detalleUnidadMedida = (sequelize, type) => {
    return sequelize.define('detalleUnidadMedidas', {
        idDetalleUnidadMedidas:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        cantidadMedida: type.FLOAT(6.2),
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

module.exports = detalleUnidadMedida