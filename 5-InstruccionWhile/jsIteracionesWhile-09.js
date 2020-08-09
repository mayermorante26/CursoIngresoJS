/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
	var i;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	
	i = 0;
	
	respuesta='si';
	while(respuesta=="si")
	{
		i++;
		numeroIngresado= prompt("Ingrese un numero");
		numeroIngresado= parseInt(numeroIngresado);

		if(i == 1 || numeroIngresado<numeroMinimo)
		{
			numeroMinimo= numeroIngresado;
		}
		
		if(i == 1 || numeroIngresado > numeroMaximo)
		{
			numeroMaximo= numeroIngresado;
		}
			
		respuesta=prompt("Desea continuar?");
	}
	
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;

}//Morante Y
/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
/*function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero=1;
	respuesta='si';

	
	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un numero: ");
		numeroIngresado = parseInt(numeroIngresado);



		if(banderaDelPrimero == 1 || numeroIngresado>numeroMaximo)
		{
			numeroMaximo = numeroIngresado;
		}
		if(banderaDelPrimero == 1 || numeroIngresado<numeroMinimo)
		{
			numeroMinimo = numeroIngresado;
		}
		banderaDelPrimero = 0;


		/*if(banderaDelPrimero == 1 )
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = 0;
		}
		else
		{
			if(numeroIngresado>numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
			}

			if(numeroIngresado<numeroMinimo)
			{
				numeroMinimo = numeroIngresado;
			}
		}

		

	
		respuesta=prompt("desea continuar?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN*/

