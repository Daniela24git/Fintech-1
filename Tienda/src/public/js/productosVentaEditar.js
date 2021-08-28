class  productosVenta{
    constructor(){
        this.FechaCadusidad = document.getElementById('FechaCadusidad')
        this.precioVenta = document.getElementById('precio')
        this.precioActual = document.getElementById('precioActual')
    }
    cambio(){
        this.precioVenta.value = parseFloat(this.precioVenta.value).toFixed(2)
        this.precioActual.value = parseFloat(this.precioActual.value).toFixed(2)
    }
}

let producto = new productosVenta()

window.onload = producto.cambio()