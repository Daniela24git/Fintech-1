class vermas{
    constructor(){
        this.verma = document.getElementById('vermas')
        this.RegistroGuardar = document.getElementById('RegistroGuardar')
        this.x = document.getElementById('x')
        this.tabla = document.getElementById('tabla')
    }
    inicio(){
        this.RegistroGuardar.style.display = 'none'
        this.x.style.display = 'none'
        this.tabla.style.display = 'none'
    }
    cambio(){
        this.RegistroGuardar.style.display = 'block'
        this.x.style.display = 'block'
        this.tabla.style.display = 'block'
        this.verma.style.display = 'none'
    }
    devuelta(){
        this.RegistroGuardar.style.display = 'none'
        this.x.style.display = 'none'
        this.tabla.style.display = 'none'
        this.verma.style.display = 'block'
    }
}

let ver = new vermas()
window.onload = ver.inicio()