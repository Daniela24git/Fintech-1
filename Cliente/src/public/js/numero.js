class optencion {
    constructor(){
        this.numero = document.getElementById('numero')
    }
    cambio(){
        if(this.numero === null){
            this.numero.value = 1
        }else{
            this.numero.value = this.numero.value + 1
        }
    }
}

let obtener = new optencion()
window.onload = obtener.cambio()