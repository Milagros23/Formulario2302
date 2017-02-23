function mostrardatos(){

var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var dni = document.getElementById("dni");
var direccion = document.getElementById("direccion");
var inputAll = document.getElementsByName("all")

if (inputAll[0].value.length == 0 || inputAll[1].value.length == 0 || inputAll[2].value.length == 0 || inputAll[3].value.length == 0) {
}else{

	document.getElementById("form").innerHTML=
        "<ul>" +
          "<li>Nombre: " + nombre + "</li>" +
          "<li>Apellido: " + apellido + "</li>" +
          "<li>DNI: " + dni + "</li>" +
          "<li>Dirección: " + direccion + "</li>" +
        "</ul>";
	}
}
