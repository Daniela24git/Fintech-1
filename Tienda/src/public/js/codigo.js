class codijoProducto {
    constructor() {
        this.codigo = document.getElementById("codigo")
        this.codigoPais = "593";
        this.codigoEmpresa = "12345";
        this.ram = Math.floor(Math.random() * 9999);
        this.codigoProducto = this.ram.toString();
        this.verificador;
        this.concatenar;
        this.suma;
        this.container = [];
        this.concatenar;
        this.array;
    }

    inicio() {
        this.concatenar = this.codigoPais + this.codigoEmpresa + this.codigoProducto;
        this.array = this.concatenar.split("", this.concatenar);
        for (let i = 0; i < 12; i++) {
            let legtura = this.array[i];
            if (i == 0) {
                this.suma = parseInt(legtura) * 1;
                this.container.push(this.suma);
            }
            if (i % 2 != 0 && i > 0) {
                this.suma = parseInt(legtura) * 3;
                this.container.push(this.suma);
            }
            if (i % 2 == 0 && i > 0) {
                this.suma = parseInt(legtura) * 1;
                this.container.push(this.suma);
            }
        }
        for (let i = 0; i < 11; i++) {
            this.suma = this.suma + this.container[i]
            var transformar = parseInt(this.suma);
        }
        this.suma = transformar / 10;
        var operacion2 = Math.ceil(this.suma) * 10;
        var operacion3 = operacion2 - transformar;
        this.verificador = this.concatenar + operacion3.toString();
        this.codigo.value = this.verificador;
    }
}

let codigo = new codijoProducto()

window.onload = codigo.inicio();