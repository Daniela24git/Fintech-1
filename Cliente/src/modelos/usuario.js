const usuarios =(sequelize, type) =>{
    return sequelize.define('usuarios', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: type.STRING(99),
        password: type.STRING,
        email: type.STRING, 
        createdAt:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatedAt:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'), 
            allowNull: false
        }
    })
}

module.exports = usuarios