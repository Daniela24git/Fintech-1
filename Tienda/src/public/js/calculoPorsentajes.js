class calculo {
    constructor(){
        this.precio = document.getElementById('precio')
        this.porsentaje = document.getElementById('porsentaje')
        this.precioVenta = document.getElementById('precioVenta')
    }
    calculo(){
        let a = parseFloat(this.precio.value)
        let b = parseFloat(this.porsentaje.value)
        let c = b/100
        this.precioVenta.value = a + c
    }
}

let porsentajes = new calculo()
window.onload = porsentajes.calculo()