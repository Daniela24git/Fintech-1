const tienda = (sequelize, type)=>{
    return sequelize.define('tiendas', {
        idTiendas: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ruc: type.INTEGER(13),
        nombreNegocio: type.STRING,
        fechaCreacion: type.STRING,
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