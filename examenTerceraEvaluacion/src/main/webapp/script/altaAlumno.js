//Crea la clase alumno
function alumno(nombre,apellidos,edad){
	this.nombre=nombre;
	this.apellidos=apellidos;
	this.edad=edad;
}
//pido los valores
	var nombre=String(prompt("Introduzca su nombre:"));
	var apellidos=String(prompt("Introduzca sus apellidos:"));
	var edad=Number(prompt("Introduzca su edad:"));
	//Instancio alumno
	var alumno1 = new alumno(nombre,apellidos,edad);
	//Presento los valores del alumno
	document.writeln("Nombre y Apellido: "+alumno1.apellidos+", "+alumno1.nombre+"<br>");
	document.writeln("Edad : "+alumno1.edad+"<br>");
	document.writeln("Edad es un tipo: "+typeof(alumno1.edad));
