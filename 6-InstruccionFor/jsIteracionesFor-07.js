function mostrar()
{
	var i;
	var numero;
	var cantidadDivisores;

	cantidadDivisores=0;

	numero= prompt("Ingrese un numero por favor: ");
	numero= parseInt(numero);

	for(i=1; i<= numero; i++)
	{
		if(numero % i ==0)
		{

			document.write(i + '<br>');
			cantidadDivisores++;
		}

	}
	
	document.write('<br>' + "La cantidad de divisores son: " + cantidadDivisores + '<br>');



}//FIN DE LA FUNCIÓN