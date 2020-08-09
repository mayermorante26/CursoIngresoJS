/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	numeroIngresado=parseInt(numeroIngresado);

	while(numeroIngresado <0 || numeroIngresado >10)
	{
		numeroIngresado = prompt("Por favor! Ingrese un número valido entre 0 y 10.");	
	}
	
	txtIdNumero.value= numeroIngresado;
}//FIN DE LA FUNCIÓN