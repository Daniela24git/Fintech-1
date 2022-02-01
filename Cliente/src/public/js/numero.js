class optencion {
    constructor(){
        this.numero = document.getElementById('numero')
    }
    cambio(){
        if(this.numero.value == ''){
            this.numero.value = 1
        }else{
            let a = parseInt(this.numero.value)
            this.numero.value = a + 1
        }
    }
}

let obtener = new optencion()
window.onload = obtener.cambio()