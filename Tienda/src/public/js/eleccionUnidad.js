class eleccionUnidad {
    constructor() {
        this.idproducto = document.getElementById('idproducto')
        this.cantidadMedida = document.getElementById('cantidadMedida')
        this.Cantidad = document.getElementById('Cantidad')
        this.unidadCantidad = document.getElementById('unidadCantidad')
        this.precioActual = document.getElementById('precioActual')
        this.precioUnidad = document.getElementById('precioUnidad')
    }
    inicio() {
        if(idproducto.value === ""){
            idproducto.value = 1
        }else{
            let a = parseInt(idproducto.value) + 1
            idproducto.value = a
        }
        this.cantidadMedida.style.display = "none"
    }

    calculo(){
        this.cantidadMedida.value = parseInt(this.Cantidad.value) * parseInt(this.unidadCantidad.value)
    }

    calculo2(){
        let a = parseFloat(this.precioUnidad.value) * parseFloat(this.cantidadMedida.value)
        this.precioActual.value = a.toFixed(2)
    }
}

let eleecion = new eleccionUnidad()

window.onload = eleecion.inicio()