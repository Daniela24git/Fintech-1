const tienda = (sequelize, type)=>{
    return sequelize.define('tiendas', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreNegocio: type.STRING,
        ruc: type.INTEGER(13),
        fechaCreacion: type.DATE,
        direccion: type.STRING,
        celular: type.INTEGER(10),
        telefono: type.INTEGER(10),
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

module.exports = tienda;