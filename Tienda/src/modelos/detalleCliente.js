const detalleCliente = (sequelize ,type) => {
    return sequelize.define('detalleCliente', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
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

module.exports = detalleCliente