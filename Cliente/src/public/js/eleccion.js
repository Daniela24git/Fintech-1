class eleccion{
    constructor(){
        this.eleccion1 = document.getElementById('eleccion')
        this.confirmar = document.getElementById('confirmar')
    }
    inicio(){
        this.eleccion1.style.display = 'none'
    }
    aparacion(){
        if(this.eleccion1.style.display = 'none'){
            this.eleccion1.style.display = 'block'
            this.confirmar.style.display = 'none'
        }
    }
    desaparicion(){
        if(this.eleccion1.style.display = 'block'){
            this.eleccion1.style.display = 'none'
            this.confirmar.style.display = 'block'
        }
    }
}

let elecciones = new eleccion()
window.onload = elecciones.inicio()