const unidadMedida = (sequelize, type) => {
    return sequelize.define('unidadMedidas', {
        idUnidadMedidas:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        unidadMedida: type.STRING,
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