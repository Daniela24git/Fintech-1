const categorias = (sequelize, type)=>{
    return sequelize.define('categorias', {
        idCategorias:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        categoria: type.STRING,
        creacionCategorias:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionCategorias:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    }) 
}

module.exports = categorias