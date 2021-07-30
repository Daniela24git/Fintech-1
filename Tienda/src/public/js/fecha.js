class fecha {
    constructor() {
        this.fecha = document.getElementById('fechas')
        this.numeroDocumento = document.getElementById('codigoDocumento')
    }
    obtencion() {
        const tiempoTranscurrido = Date.now();
        const hoy = new Date(tiempoTranscurrido);
        this.fecha.value = hoy.toLocaleDateString();
        fechas.sumaNumeros()
    }
    sumaNumeros(){
        if(this.numeroDocumento.value == ""){
            this.numeroDocumento.value = 1
        }else{
            this.numeroDocumento.value = this.numeroDocumento.value + 1
        }
        fechas.cambio()
    }
}

let fechas = new fecha();
window.onload = fechas.obtencion()