const indexCtrl = {};
const pool = require('../configuracionBaseDatos/baseDatos.sql')

indexCtrl.mostrar = (req, res) => {
    res.render('index');
};

indexCtrl.mandar = async (req, res) => {
    const categorias = await pool.query("SELECT * FROM categorias")
    if (categorias.length == 0) {
        const categoria = categorias[0]
        if (categoria === undefined) {
            await pool.query("INSERT INTO categorias(id, categoria) VALUES (1, 'Consumible')")
            await pool.query("INSERT INTO categorias(id, categoria) VALUES (2, 'No consumible')")
            await pool.query("INSERT INTO categorias(id, categoria) VALUES (3, 'Bebidas')")
            console.log(" se guardo ")
        } 
    }else {
        console.log("Ya existe")
    }

    const unidadMedida = await pool.query("SELECT * FROM unidadMedidas")
    if (unidadMedida.length == 0) {
        const unidad = unidadMedida[0]
        if (unidad === undefined) {
            await pool.query("INSERT INTO unidadMedidas(id, unidadMedida, categoriaId) VALUES (1, 'Quintal', 1)")
            await pool.query("INSERT INTO unidadMedidas(id, unidadMedida, categoriaId) VALUES (2, 'Arrobas', 1)")
            await pool.query("INSERT INTO unidadMedidas(id, unidadMedida, categoriaId) VALUES (3, 'Libra', 1)")
            await pool.query("INSERT INTO unidadMedidas(id, unidadMedida, categoriaId) VALUES (4, 'Media Libra', 1)")
            await pool.query("INSERT INTO unidadMedidas(id, unidadMedida, categoriaId) VALUES (5, 'Onza', 1)")
            await pool.query("INSERT INTO unidadMedidas(id, unidadMedida, categoriaId) VALUES (6, 'Cajas', 2)")
            await pool.query("INSERT INTO unidadMedidas(id, unidadMedida, categoriaId) VALUES (7, 'sobres', 2)")
            await pool.query("INSERT INTO unidadMedidas(id, unidadMedida, categoriaId) VALUES (8, 'rollos', 2)")
            await pool.query("INSERT INTO unidadMedidas(id, unidadMedida, categoriaId) VALUES (9, 'Paquetes', 2)")
            await pool.query("INSERT INTO unidadMedidas(id, unidadMedida, categoriaId) VALUES (10, 'Pomos', 3)")
            await pool.query("INSERT INTO unidadMedidas(id, unidadMedida, categoriaId) VALUES (11, 'Bottellones', 3)")
            await pool.query("INSERT INTO unidadMedidas(id, unidadMedida, categoriaId) VALUES (12, 'Litros', 3)")
            await pool.query("INSERT INTO unidadMedidas(id, unidadMedida, categoriaId) VALUES (13, 'Medio Litro', 3)")
            await pool.query("INSERT INTO unidadMedidas(id, unidadMedida, categoriaId) VALUES (14, 'Cuarto de Listro', 3)")
            console.log(" se guardo ")
        } 
    }else {
        console.log("Ya existe")
    }
    res.redirect('/Login');
}
module.exports = indexCtrl;
