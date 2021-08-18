const usuarios =(sequelize, type) =>{
    return sequelize.define('usuarios', {
        idUsuarios: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: type.STRING(99),
        password: type.STRING,
        email: type.STRING, 
        creacionUsuarios:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionUsuarios:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = usuarios