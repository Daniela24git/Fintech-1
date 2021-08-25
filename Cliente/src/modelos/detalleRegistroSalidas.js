const detalleRegistroSalidas = (sequelize, type)=>{
    return sequelize.define('detalleRegistroSalidas',{
        iddetalleRegistroSalidas: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Precio: type.FLOAT(6.2),
        ventaCantidad: type.INTEGER,
        salidaCantidad: type.INTEGER,
        cantidadRestante: type.INTEGER,
        creacionRegistroEntradas: type.STRING,
        actualizacionRegistroSalidas:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = detalleRegistroSalidas