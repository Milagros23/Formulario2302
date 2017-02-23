function mostrardatos(){

var nombre = document.getElementById("nombre").value;
var apellido = document.getElementById("apellido").value;
var dni = document.getElementById("dni").value;
var direccion = document.getElementById("direccion").value;
var form = document.getElementById("formu");

formu.innerHTML=( "<li>Nombre:"     + nombre      + "<br>"   +
                      "<li>Apellidos: " + apellido    + "<br>"   +
                      "<li>DNI: "       + dni         + "<br>"   +
                      "<li>Direccion: " + direccion);
}
