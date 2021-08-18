const detalleCliente = (sequelize ,type) => {
    return sequelize.define('detalleCliente', {
        idDetalleCliente: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        creacionDetalleCliente:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionDetalleCliente:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = detalleCliente