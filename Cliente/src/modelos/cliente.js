const cliente = (sequelize, type)=>{
    return sequelize.define('clientes', {
        id: {
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

module.exports = cliente