const porcentajes = (sequelize, type) => {
    return sequelize.define('porcentajes', {
        idPorcentaje: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        porcentaje: type.STRING,
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

module.exports = porcentajes