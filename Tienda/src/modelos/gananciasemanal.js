const gananciaSemanal= (sequelize, type) =>{
    return sequelize.define ("gananciaSemanales", {
        idGananciaSemanal:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        valorGananciaSemanal: type.STRING,
        ahorrosSemanal: type.STRING,
        creacionGananciaSemanal:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionGananciaSemanal:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = gananciaSemanal