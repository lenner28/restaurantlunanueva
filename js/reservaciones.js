
function reservarHabitacion(){
    var Ciudad = document.getElementById('cbxCiudades').value;
    var CantComensales =document.getElementById('txtCantComensales').value;
    var Hora=document.getElementById('txtHora').value;
    if(CantComensales== ''){
        mostrarMensaje('Cantidad de Huespedes es Vacío');
    } else{
        alert('Los datos ingresados son: '
        +'La Ciudad elegida es '+ Ciudad 
        +'. La Hora de reservación es: '+ Hora
        +' . Los comensales son:  '+ CantComensales);
    }
}
