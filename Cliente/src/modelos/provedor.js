const provedor = (sequelize, type)=>{
    return sequelize.define('provedores', {
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        NombreProveedor: type.STRING,
        Direccion: type.STRING,
        Numero: type.INTEGER(10),
        Estado: type.BOOLEAN,
        createdAt:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        //ON UPDATE CURRENT_TIMESTAMP pegar antes de crear la base
        updatedAt:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    })
}

module.exports = provedor