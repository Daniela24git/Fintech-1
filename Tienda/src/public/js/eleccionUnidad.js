class eleccionUnidad{
    constructor(){
        this.categoria = document.getElementById('categoria')
        this.UnidadMedidas1 = document.getElementById('UnidadMedidas1')
        this.UnidadMedidas2 = document.getElementById('UnidadMedidas2')
        this.UnidadMedidas3 = document.getElementById('UnidadMedidas3')
        this.productoCantidad = document.getElementById('productoCantidad')
        this.Cantidad = document.getElementById('Cantidad')
        this.a = document.getElementById('UnidadMedidas')
    }
    aparicionUnidadMedida() {
        if (this.categoria.value === "Consumible") {
            let select1 = '<select id="UnidadMedida" onclick="eleecion.recuperacionDatos()">'
            select1 += '<option value="Quintal">Quintal</option>'
            select1 += '<option value="Arrobas">Arrobas</option>'
            select1 += '<option value="Libra">Libra</option>'
            select1 += '<option value="Media Libra">Media Libra</option>'
            select1 += '<option value="Onza">Onza</option>'
            select1 += '</select>'
            this.UnidadMedidas1.innerHTML = select1
            this.UnidadMedidas1.style.display = 'block'
            this.UnidadMedidas2.style.display = 'none'
            this.UnidadMedidas3.style.display = 'none'
        }
        if (this.categoria.value === "No consumible") {
            let select2 = '<select id="UnidadMedida1" onclick="eleecion.recuperacionDatos()">'
            select2 += '<option value="Cajas">Cajas</option>'
            select2 += '<option value="sobres">sobres</option>'
            select2 += '<option value="rollos">rollos</option>'
            select2 += '<option value="Paquetes">Paquetes</option>'
            select2 += '</select>'
            this.UnidadMedidas2.innerHTML = select2
            this.UnidadMedidas1.style.display = 'none'
            this.UnidadMedidas2.style.display = 'block'
            this.UnidadMedidas3.style.display = 'none'
        }
        if (this.categoria.value === "Bebidas") {
            let select3 = '<select id="UnidadMedida2" onclick="eleecion.recuperacionDatos()">'
            select3 += '<option value="Pomos">Pomos</option>'
            select3 += '<option value="Bottellones">Bottellones</option>'
            select3 += '<option value="Litros">Litros</option>'
            select3 += '<option value="Medio Litro">Medio Litro</option>'
            select3 += '<option value="Cuarto de Listro">Cuarto de Listro</option>'
            select3 += '</select>'
            this.UnidadMedidas3.innerHTML = select3
            this.UnidadMedidas1.style.display = 'none'
            this.UnidadMedidas2.style.display = 'none'
            this.UnidadMedidas3.style.display = 'block'
        }
        eleecion.traspasoCantidad()
    }
    traspasoCantidad(){
        this.productoCantidad.value = this.Cantidad.value
    }
    recuperacionDatos(){
       let a = document.getElementById('UnidadMedida')
       let b = document.getElementById('UnidadMedida1')
       let c = document.getElementById('UnidadMedida2')
       if(this.categoria.value === "Consumible"){
        this.a.value = a.value
       }
       if(this.categoria.value === "No consumible"){
        this.a.value = b.value
       }
       if(this.categoria.value === "Bebidas"){
        this.a.value = c.value
       }
    }
}

let eleecion = new eleccionUnidad()

window.onload = eleecion.aparicionUnidadMedida()
window.onload = eleecion.recuperacionDatos()