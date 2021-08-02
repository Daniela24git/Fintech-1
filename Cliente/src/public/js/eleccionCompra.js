class formato {
    constructor() {
        this.fecha = document.getElementById('caducidad')
        this.cantidad = document.getElementById('Cantidad')
        this.precio = document.getElementById('Precio')
        this.precioCambio = document.getElementById('precioCambio')
        this.cantidadCambio = document.getElementById('cantidadCambio')
        this.productoCantidad = document.getElementById('productoCantidad')
    }
    cambio() {
        let a = formatos.fecha.value.slice(4, 15)
        this.fecha.value = a
        this.cantidad.value = 1
        this.precio.value = parseFloat(this.precioCambio.value).toFixed(2)
    }
    subir() {
        if (parseInt(this.cantidadCambio.value) <= this.cantidad.value) {
            alert('Cantidad Maxima Del Producto')
            this.cantidad.value = parseInt(this.cantidadCambio.value)
            let a = parseInt(this.cantidadCambio.value) * parseFloat(this.precioCambio.value)
            this.precio.value = a.toFixed(2)
        } else {
            this.cantidad.value = parseInt(this.cantidad.value) + 1
            formatos.multiplicarPrecio()
        }
    }
    bajar() {
        let a = parseInt(this.cantidad.value)
        if (a === 1) {
            alert('Cantidad Minima Del Producto')
            this.cantidad.value = 1
            this.precio.value = parseFloat(this.precioCambio.value).toFixed(2)
        } else {
            this.cantidad.value = parseInt(this.cantidad.value) - 1
            formatos.divirPrecio()
        }
    }
    multiplicarPrecio() {
        let costo = this.cantidad.value * parseFloat(this.precioCambio.value)
        this.precio.value = costo.toFixed(2)
        formatos.restaProdcutos()
    }
    divirPrecio() {
        let costo = parseFloat(this.precio.value) - parseFloat(this.precioCambio.value)
        this.precio.value = costo.toFixed(2)
        formatos.restaIncrementalProductos()
    }
    restaIncrementalProductos(){
        let a = parseInt(this.cantidad.value)
        let b = parseInt(this.productoCantidad.value)
        let c = a + b
        this.productoCantidad.value = c
    }
    restaProdcutos(){
        let a = parseInt(this.cantidad.value)
        let b = parseInt(this.cantidadCambio.value)
        let c = b - a
        this.productoCantidad.value = c
    }
}

let formatos = new formato()
window.onload = formatos.cambio()