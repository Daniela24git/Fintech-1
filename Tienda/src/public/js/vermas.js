var i =0

var boton =document.querySelector('#botonvermas').addEventListener('click', function(){
    //alert('Funcionando');
    if (!i) {
        document.getElementById('vermas').style.display='inline';
        document.getElementById('botonvermas').innerHTML='Ver menos';
        document.getElementById('botonvermas').className = "position-absolute btn btn-outline-danger border-0 end-0 mr-4";


        i=1
    }else{
        document.getElementById('vermas').style.display='none';
        document.getElementById('botonvermas').innerHTML='Ver mas';
        document.getElementById('botonvermas').className = "position-absolute btn btn-outline-success border-0 end-0 mr-4";

        i=0
    }

})
