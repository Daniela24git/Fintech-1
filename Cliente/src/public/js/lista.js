class lista {
    constructor() {
        this.carrito = document.getElementById("carrito")
        this.carrito1 = document.getElementById("carrito1")
        this.nombreLista = document.getElementById('nombreLista')
        this.lista = document.getElementById('lista')
        this.mover = document.getElementById('mover')
        this.nombresListas = document.getElementById('nombresListas')
    }
    inicio() {
        this.carrito.style.display = 'block'
        this.carrito1.style.display = "none"
        this.nombreLista.style.display = "none"
        this.lista.style.display = 'none'
        this.mover.style.display = 'none'

    }
    aparecerLista() {
        this.nombreLista.style.display = "block"
        if (this.nombresListas.value === "") {
            this.carrito.style.display = 'none'
            this.nombreLista.style.display = "block"
         } else {
            this.carrito.style.display = 'none'
            this.carrito1.style.display = "block"
            this.nombreLista.style.display = "none"
            this.lista.style.display = 'block'
            this.mover.style.display = 'block'
        }
    }
    esconderLista() {
        this.carrito.style.display = 'block'
        this.carrito1.style.display = "none"
        this.nombreLista.style.display = "none"
        this.lista.style.display = 'none'
        this.mover.style.display = 'none'

    }
}

let a = new lista

window.onload = a.inicio()