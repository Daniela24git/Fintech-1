const detalleCategoria = (sequelize, type) => {
    return sequelize.define('detalleCategorias', {
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        subCategoria: type.STRING,
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

module.exports = detalleCategoria