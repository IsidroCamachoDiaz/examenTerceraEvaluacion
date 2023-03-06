//Se le pide al usuario la opcion
var ciudad= prompt("Introduca una ciudad de estas 3 Madrid,Paris o Londres");
var fechaHoy = new Date();
var ciudadElegida;

//creo una variable para londres porque tiene una hora diferente y no imprima la de las otras 2
var esCiudad=true;

//Compruebo que no sea londres
if(ciudad!="Londres"&&ciudad!="LONDRES"&&ciudad!="londres"){
	
	if(ciudad=="Madrid"||ciudad=="MADRID"||ciudad=="madrid")
		ciudadElegida="Madrid";
	else if(ciudad=="Paris"||ciudad=="PARIS"||ciudad=="paris")
		ciudadElegida="Paris";
		//si no es ninguna
	else{
		document.write("No eligio ninguna ciudad de las que habia")
		esCiudad=false;
		}
}

//si es londres
else if(ciudad=="Londres"||ciudad=="LONDRES"||ciudad=="londres"){
		//Cojo la hora de Inglaterra
	let fechaopcion =fechaHoy.toLocaleString('en-GB');
		//Presenta la fecha de londres
	document.write("Ciudad: Londres <br>")
		//parto el string
	document.write("Fecha: "+fechaopcion.substring(0, 10)+"<br>")
	document.write("Hora: "+fechaopcion.substring(12, 20)+"<br>")
	esCiudad=false;
}

//calcula hora para madrid y paris y la fecha
var hora = fechaHoy.getHours() + ':' + fechaHoy.getMinutes() + ':' + fechaHoy.getSeconds();
var fechaBien= fechaHoy.getDay()+"-"+(fechaHoy.getMonth()+1)+"-"+fechaHoy.getFullYear();

//Presenta la fecha de paris y madrid
if(esCiudad){
	//Cojo la hora de España que es la misma que Inglaterra
	let fechaopcion2 =fechaHoy.toLocaleString('es-ES');
	document.write("Ciudad: "+ciudadElegida+"<br>")
	document.write("Fecha: "+fechaopcion2.substring(0, 8)+"<br>")
	document.write("Hora: "+fechaopcion2.substring(10, 20)+"<br>")
}
