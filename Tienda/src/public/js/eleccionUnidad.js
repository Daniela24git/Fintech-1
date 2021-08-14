class eleccionUnidad {
    constructor() {
        this.idproducto = document.getElementById('idproducto')
    }
    inicio() {
        if(idproducto.value === ""){
            idproducto.value = 1
        }else{
            let a = parseInt(idproducto.value) + 1
            idproducto.value = a
        }
    }
}

let eleecion = new eleccionUnidad()

window.onload = eleecion.inicio()