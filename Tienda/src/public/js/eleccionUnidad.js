class eleccionUnidad {
    constructor() {
        this.idproducto = document.getElementById('idproducto')
        this.cantidadMedida = document.getElementById('cantidadMedida')
        this.Cantidad = document.getElementById('Cantidad')
        this.unidadCantidad = document.getElementById('unidadCantidad')
    }
    inicio() {
        this.cantidadMedida.style.display = "none"
        if(idproducto.value === ""){
            idproducto.value = 1
        }else{
            let a = parseInt(idproducto.value) + 1
            idproducto.value = a
        }
    }

    calculo(){
        this.cantidadMedida.value = parseInt(this.Cantidad.value) * parseInt(this.unidadCantidad.value)
    }
}

let eleecion = new eleccionUnidad()

window.onload = eleecion.inicio()