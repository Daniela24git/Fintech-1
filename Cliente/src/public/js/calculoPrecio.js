class calculo {
    constructor() {
        this.precio = document.getElementsByName('Precio')
        this.valorTotal = document.getElementById('total')
        this.suma = 0
    }
    calcularPrecio() {
        for (let i = 0; i < this.precio.length; i++) {
            this.suma = parseFloat(this.precio[i].value) + this.suma
        }
        this.valorTotal.value = this.suma.toFixed(2)
    }
}

let calcular = new calculo()

window.onload = calcular.calcularPrecio()