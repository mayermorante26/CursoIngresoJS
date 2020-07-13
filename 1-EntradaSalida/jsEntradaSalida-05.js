/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var edadIngresada;
	var nombreIngresasdo;

	nombreIngresasdo= txtIdNombre.value;
	edadIngresada=txtIdEdad.value;
	
	alert("Usted se llama "+ nombreIngresasdo + " y tiene " + edadIngresada+  " años" ); //puede estar todo junto o no
	
	alert("Usted se llama "+ nombreIngresasdo ); 
	alert ( " y tiene " + edadIngresada+  " años");

     
}

