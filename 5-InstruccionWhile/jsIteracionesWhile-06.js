function mostrar()
{
	var i;
	var acumulador;
	var numeroIngresado;
	var promedio;
	
	i=0;
	acumulador=0;
	
	while(i<5)
	{
		numeroIngresado = prompt("Ingrese un numero por favor");
		numeroIngresado= parseInt(numeroIngresado);
		
		i= i+1;
		acumulador= acumulador+ numeroIngresado;

	}
	
	promedio= acumulador/ i;
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=promedio;
}//FIN DE LA FUNCIÓN