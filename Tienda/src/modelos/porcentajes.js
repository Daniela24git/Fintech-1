const porsentajes = (sequelize, type) => {
    return sequelize.define('porsentajes', {
        idPorsentajes: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        porsentaje: type.STRING,
        creacionCategorias: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionCategorias: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = porsentajes