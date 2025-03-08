import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
let quien = ["Mi abuelo ", "Mi vecino Jose ", "Mi profesor ", "Un alien ", "Mi amiga Dolo ", "Joey ", "El fantasma del baño ", "Armando, el pato, ", "Mi padre "];
let accion = ["se quedó atrapado en el ascensor ", "me secuestró ", "se desmayó ", "invadió mi casa ", "activó la alarma de incendios ", "perdió las llaves de mi casa ", "se comió mis deberes ", "me indicó mal la dirección ", "me retó a una partida de ajedrez "];
let cuando= ["justo antes de salir de casa ", "cuando ya estaba de camino ", "a mitad de la noche ", "en el último minuto ","justo cuando me desperté ", "mientras estaba en el baño ", "justo cuando iba a pagar ","cuando mi jefe me estaba llamando ", "mientras me estaba vistiendo "];
const no_pude = "y no pude";
let marron = ["entregar los deberes.","pagar la cuenta.", "hacer ejercicio.", "sacar la basura.", "ir a la comida familiar.", "responder el mensaje","hacer la compra.", "ir a la cita con el dentista", "lavar el coche"];

let variable1= Math.floor(Math.random() * quien.length);
let variable2= Math.floor(Math.random() * accion.length);
let variable3= Math.floor(Math.random() * cuando.length);
let variable4= Math.floor(Math.random() * marron.length);

document.querySelector(".excusa").innerHTML = quien[variable1] + accion[variable2] + cuando[variable3]+" y no pude "+ marron[variable4];
}