/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("Ingrese el número de clave.");
	
		while(claveIngresada != "utn750")
		{
			claveIngresada = prompt("Ingrese el número de clave correcta por favor");
		}

		alert("Clave correcta!!");


}//FIN DE LA FUNCIÓN
