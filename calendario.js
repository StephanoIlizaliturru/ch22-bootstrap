console.log('conectado')
// varibales para guardar los datos de los inputs
function Calculadora (){
let dia = 19//document.getElementById('dia').value
let mes = 01 //document.getElementById('mes').value
let año = 2023 //document.getElementById('año').value

// variable guardando todos los datos en uno y darlo en formato fecha 
let fechaAConsultar = new Date(`${mes} ${dia}, ${año}`);
console.log(fechaAConsultar)

// variable para guardar el dia en  numero 
let day = fechaAConsultar.getDay();

let diaEscrito = ''
let diaLaboral = ``
switch (day)  {
case 0:
  diaEscrito = 'Domingo';
  diaLaboral = 'No es dia laboral';
  break;
case 1:
  diaEscrito = 'Lunes';
  diaLaboral = 'Es dia laboral';
   break;
case 2:
  diaEscrito = 'Martes';
  diaLaboral = 'Es dia laboral';
  break;
case 3:
    diaEscrito = 'Miercoles';
    diaLaboral = 'Es dia laboral';
    break;
case 4:
    diaEscrito = 'Jueves';
    diaLaboral = 'Es dia laboral';
    break;
case 5:
    diaEscrito = 'Viernes';
    diaLaboral = 'Es dia laboral';
    break;
case 6:
    diaEscrito = 'Sabado';
    diaLaboral = 'No es dia laboral';
    break;
default:
    diaEscrito = 'ese dia no existe';
    diaLaboral = 'si no existe, no se labora';
}
console.log(`switch - el ${diaEscrito} ${diaLaboral}`);
const respuesta = document.getElementById('resultado').value = ` El ${diaEscrito} ${diaLaboral}`;

}

let funcionando = document.getElementById('calcul');
funcionando.addEventListener('click',Calculadora,true)

