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
            await pool.query("CREATE VIEW productoscantidad AS SELECT e.*, p.idProductos, p.productoCantidad, p.precioVenta, p.creacionProductos, p.actualizacionProductos, p.productoEntradaIdProductoEntradas, u.unidadMedida, d.unidadVeneta, d.cantidadVenta FROM productoentradas e JOIN productos p ON p.productoEntradaIdProductoEntradas = e.idProductoEntradas JOIN unidadmedidas u ON e.unidadMedidaIdUnidadMedidas = u.idUnidadMedidas JOIN detallecategorias d ON d.idDetalleCategorias = p.detalleCategoriaIdDetalleCategorias")
            await pool.query("CREATE VIEW ProductosLista AS SELECT p.*, e.NombreProducto, d.unidadVeneta, d.cantidadVenta FROM productos p JOIN productoentradas e ON e.idProductoEntradas = p.productoEntradaIdProductoEntradas JOIN detallecategorias d ON d.idDetalleCategorias = p.detalleCategoriaIdDetalleCategorias")
            await pool.query("CREATE VIEW listaCompras AS SELECT d.Cantidad, d.Precio, d.listaProductoIdListaProductos, p.NombreProducto FROM detallelistaproductos d JOIN productoslista p ON d.productoIdProductos = p.idProductos")
            await pool.query("CREATE VIEW idmaximo AS SELECT MAX(idProductoEntradas) FROM productoentradas")
            await pool.query("INSERT INTO categorias(idCategorias	, categoria) VALUES (1, 'Consumible')")
            await pool.query("INSERT INTO categorias(idCategorias	, categoria) VALUES (2, 'No consumible')")
            await pool.query("INSERT INTO categorias(idCategorias	, categoria) VALUES (3, 'Bebidas')")
            console.log(" se guardo ")
        } 
    }else {
        console.log("Ya existe")
    }

    const unidadMedida = await pool.query("SELECT * FROM unidadMedidas")
    if (unidadMedida.length == 0) {
        const unidad = unidadMedida[0]
        if (unidad === undefined) {
            await pool.query("INSERT INTO unidadMedidas(idUnidadMedidas, unidadMedida, categoriaIdCategorias) VALUES (1, 'Quintal', 1)")
            await pool.query("INSERT INTO unidadMedidas(idUnidadMedidas, unidadMedida, categoriaIdCategorias) VALUES (2, 'Arrobas', 1)")
            await pool.query("INSERT INTO unidadMedidas(idUnidadMedidas, unidadMedida, categoriaIdCategorias) VALUES (3, 'Libra', 1)")
            await pool.query("INSERT INTO unidadMedidas(idUnidadMedidas, unidadMedida, categoriaIdCategorias) VALUES (4, 'Media Libra', 1)")
            await pool.query("INSERT INTO unidadMedidas(idUnidadMedidas, unidadMedida, categoriaIdCategorias) VALUES (5, 'Onza', 1)")
            await pool.query("INSERT INTO unidadMedidas(idUnidadMedidas, unidadMedida, categoriaIdCategorias) VALUES (6, 'Cajas', 2)")
            await pool.query("INSERT INTO unidadMedidas(idUnidadMedidas, unidadMedida, categoriaIdCategorias) VALUES (7, 'sobres', 2)")
            await pool.query("INSERT INTO unidadMedidas(idUnidadMedidas, unidadMedida, categoriaIdCategorias) VALUES (8, 'rollos', 2)")
            await pool.query("INSERT INTO unidadMedidas(idUnidadMedidas, unidadMedida, categoriaIdCategorias) VALUES (9, 'Paquetes', 2)")
            await pool.query("INSERT INTO unidadMedidas(idUnidadMedidas, unidadMedida, categoriaIdCategorias) VALUES (10, 'Pomos', 3)")
            await pool.query("INSERT INTO unidadMedidas(idUnidadMedidas, unidadMedida, categoriaIdCategorias) VALUES (11, 'Bottellones', 3)")
            await pool.query("INSERT INTO unidadMedidas(idUnidadMedidas, unidadMedida, categoriaIdCategorias) VALUES (12, 'Litros', 3)")
            await pool.query("INSERT INTO unidadMedidas(idUnidadMedidas, unidadMedida, categoriaIdCategorias) VALUES (13, 'Medio Litro', 3)")
            await pool.query("INSERT INTO unidadMedidas(idUnidadMedidas, unidadMedida, categoriaIdCategorias) VALUES (14, 'Cuarto de Listro', 3)")
            await pool.query("INSERT INTO unidadMedidas(idUnidadMedidas, unidadMedida, categoriaIdCategorias) VALUES (15, 'Dolar', 1)")
            console.log(" se guardo ")
        } 
    }else {
        console.log("Ya existe")
    }
    res.redirect('/Login');
}
module.exports = indexCtrl;
