class calculo {
    constructor(){
        this.precio = document.getElementById('precio')
        this.porsentaje = document.getElementById('porsentaje')
        this.precioVenta = document.getElementById('precioVenta')
        this.precioTotalVenta = document.getElementById('precioTotalVenta')
        this.cantidadVenta = document.getElementById('cantidadVenta')
        this.cantidadVenta = document.getElementById('cantidadVenta')
    }
    calculo(){
        let a = parseFloat(this.precio.value)
        let b = parseFloat(this.porsentaje.value)
        let c = b / 100
        let d = (1 - c)
        this.precioVenta.value = (a / d).toFixed(2)
        porsentajes.calculo2()
    }
    calculo2(){
        let a = parseFloat(this.precioVenta.value)
        let b = parseInt(this.cantidadVenta.value)
        let c = b * a
        this.precioTotalVenta.value = c.toFixed(2)
    }
    cantidad(){
        this.cantidadVenta.value = parseInt(this.cantidadVenta.value * 0.1)
    }
}

let porsentajes = new calculo()
window.onload = porsentajes.calculo()
window.onload = porsentajes.cantidad()