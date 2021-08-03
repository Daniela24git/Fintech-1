class  productosAgregar{
    constructor(){
        this.FechaCadusidad = document.getElementById('FechaCadusidad')
        this.precioActual = document.getElementById('precioActual')
    }
    cambio(){
        let a = producto.FechaCadusidad.value.slice(4, 15)
        this.FechaCadusidad.value = a
        this.precioActual.value = parseFloat(this.precioActual.value).toFixed(2)
    }
}

let producto = new productosAgregar()

window.onload = producto.cambio()