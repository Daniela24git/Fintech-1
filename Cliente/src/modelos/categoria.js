const categorias = (sequelize, type)=>{
    return sequelize.define('categorias', {
        idCategorias:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        categoria: type.STRING,
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

module.exports = categorias