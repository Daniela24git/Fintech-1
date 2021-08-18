const unidadMedida = (sequelize, type) => {
    return sequelize.define('unidadMedidas', {
        idUnidadMedidas:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        unidadMedida: type.STRING,
        creacionUnidadMedidas:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionUnidadMedidas:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = unidadMedida 