const unidadMedida = (sequelize, type) => {
    return sequelize.define('unidadMedidas', {
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        unidadMedida: type.STRING,
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

module.exports = unidadMedida 