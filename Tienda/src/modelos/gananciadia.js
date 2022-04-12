const gananciaDia = (sequelize, type) =>{
    return sequelize.define ("gananciaDias", {
        idGananciaDia:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombreGananciaDia: type.STRING,
        valorGanancia: type.STRING,
        creacionGananciaDia:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionGananciaDia:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = gananciaDia