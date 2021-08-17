const provedor = (sequelize, type)=>{
    return sequelize.define('provedores', {
        idProvedores:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        NombreProveedor: type.STRING,
        Direccion: type.STRING,
        Celular: type.INTEGER(10),
        Telefono: type.INTEGER(10),
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