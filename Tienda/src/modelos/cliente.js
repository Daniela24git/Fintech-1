const cliente = (sequelize, type)=>{
    return sequelize.define('clientes', {
        idClientes: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Nombres: type.STRING,
        Direccion: type.STRING,
        username: type.STRING(99),
        password: type.STRING,
        telefono: type.INTEGER(7),
        Celular: type.INTEGER(10), 
        creacionClientes:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionClientes:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = cliente