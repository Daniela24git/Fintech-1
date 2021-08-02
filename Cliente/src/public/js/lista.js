class lista {
    constructor() {
        this.lista = document.getElementById("lista")
        this.carrito = document.getElementById("carrito")
        this.carrito1 = document.getElementById("carrito1")
        this.mover = document.getElementById("mover")
        this.NombreLista = document.getElementById('nombreLista')
        this.nombreLista = document.getElementById('LISTAN')
        this.nombre= document.getElementById('NombreLista') 
    }
    inicio() {
        this.mover.style.display = "none"
        this.lista.style.display = "none"
        this.carrito1.style.display = "none"
        this.nombreLista.style.display = 'none'
        this.NombreLista.style.display = 'none'
        this.carrito.style.display = "block"
    }
    aparecerLista() {
        if (this.nombreLista.value === "") {
            this.NombreLista.style.display = 'block'
            this.nombre.value = 'Lista '+ this.nombre.value
            this.carrito.style.display = "none"
            this.carrito1.style.display = "block"
        } else {
            this.lista.style.display = "block"
            this.carrito.style.display = "none"
            this.carrito1.style.display = "block"
            this.mover.style.display = "block"
            this.nombreLista.style.display = 'block'
            this.NombreLista.style.display = 'none'
        }
    }
    esconderLista() {
        this.lista.style.display = "none"
        this.mover.style.display = "none"
        this.nombreLista.style.display = 'none'
        this.NombreLista.style.display = 'none'
        this.carrito1.style.display = "none"
        this.carrito.style.display = "block"
        this.GuardarLista.style.display = 'none'
    }
}

let a = new lista

window.onload = a.inicio()