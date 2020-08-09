/*En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") 
y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/

function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperatura;
	var i;
	var respuesta;
	var mayorTemperatura;
	var nombreMayorTemperatura;
	var contadorHombresSolteros;
	var contadorMayoresViudos;
	var contadorHombresViudos;
	var contadorMayoresTemperatura;
	var acumuladorEdadSolteros;
	var promedioHombresSolteros;
	var hombresSolteOViu;


	i=0;
	respuesta= "si";
	contadorHombresSolteros=0;
	contadorMayoresViudos=0;
	contadorHombresViudos=0;
	contadorMayoresTemperatura=0;
	acumuladorEdadSolteros=0;
	hombresSolteOViu=0;
	

	while(respuesta== "si")
	{	
		i++;
		nombre= prompt("Ingrese su nombre por favor: ");

		edad=prompt("Ingrese su edad por favor: ");
		edad= parseInt(edad);
		while(isNaN(edad)|| edad <0)
		{
			edad=prompt("Ingrese su edad por favor: ");
			edad= parseInt(edad);
		}

		sexo= prompt("Ingrese su sexo por favor: 'f' para femenino y 'm' para masculino");
		while(!isNaN(sexo) || sexo!= 'f' && sexo != 'm' )
		{
			sexo= prompt("Error!! Igrese su sexo por favor: 'f' para femenino y 'm' para masculino");
		}

		estadoCivil= prompt("Ingrese su estadoCivil por favor: 'soltero' , 'casado' o 'viudo'");
		while(!isNaN(estadoCivil) || estadoCivil!= 'soltero' && estadoCivil != 'casado' && estadoCivil != 'viudo' )
		{
			estadoCivil= prompt("Error!! Ingrese su estadoCivil por favor: 'soltero' - 'casado' o 'viudo'");
		}

		temperatura=prompt("Ingrese su temperatura por favor: ");
		temperatura= parseFloat(temperatura);
		while(isNaN(temperatura)|| temperatura <32 || temperatura> 42)
		{
			temperatura=prompt("Error! Ingrese su temperatura por favor(32 - 42) :");
			temperatura= parseFloat(temperatura);
		}

		if(i==1 || temperatura>mayorTemperatura)
		{
			mayorTemperatura= temperatura;
			nombreMayorTemperatura= nombre;
		}

		switch(estadoCivil)
		{
			case 'soltero':

			if(sexo=='m')
			{
				contadorHombresSolteros++;
				acumuladorEdadSolteros= acumuladorEdadSolteros+ edad;
			}

			break;

			case 'casado':

			break;

			case 'viudo':

			if(edad>18)
			{
				contadorMayoresViudos++;
			}

			if(sexo=='m')
			{
				contadorHombresViudos++;
			}
			break;


		}

		
		if(edad>60 && temperatura>38)
		{
			contadorMayoresTemperatura++;
		}

		respuesta= prompt("Desea seguir ingresando? Responda 'si' o 'no' ");
		while(!isNaN(respuesta) || respuesta!= 'si' && respuesta!= 'no')
		{
			respuesta= prompt("Desea seguir ingresando? Responda 'si' o 'no' ");
		}
	}

	promedioHombresSolteros= acumuladorEdadSolteros/contadorHombresSolteros;
	hombresSolteOViu= contadorHombresSolteros+ contadorHombresViudos;
	
	document.write("El nombre de la persona con mayor temperatura es: " + nombreMayorTemperatura + '<br>');
	document.write(" La cantidad de mayores de edad estan viudos es : " + contadorMayoresViudos + '<br>');
	document.write(" La cantidad de hombres que hay solteros o viudos es : " + hombresSolteOViu + '<br>');
	document.write(" La cantidad de  personas de la tercera edad que tienen mas de 38 de temperatura es : " + contadorMayoresTemperatura + '<br>');
	document.write(" El promedio de edad entre los hombres solteros es : " + promedioHombresSolteros + '<br>');

	
}//Morante Y.

/* var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperatura;
	var i;
	var respuesta;
	var promedioEdadHombresSolteros;
	var nombreMayorTemperatura;
	var cantidadHombresSolteros;
	var cantidadTerceraEdadMas38;
	var cantidadMayoresViudos;
	var cantidadHombresViudos;
	var contadorEdadHombresSolteros;
	var acumuladorEdadHombresSolteros;
	var mayorTemperatura;
	var cantidadSolteOViu;


	i=0;
	respuesta= 'si';
	cantidadHombresSolteros=0;
	cantidadHombresViudos=0;
	cantidadMayoresViudos=0;
	cantidadTerceraEdadMas38=0;
	contadorEdadHombresSolteros=0;
	acumuladorEdadHombresSolteros=0;
	

	while(respuesta=='si')
	{
		i++;

		nombre= prompt("Ingrese su nombre por favor: ");

		edad= prompt("Ingrese su edad por favor: ");
		edad= parseInt(edad);
		while(isNaN(edad) || edad<0)
		{
			edad= prompt("Error! Ingrese una edad correcta por favor: ");
			edad= parseInt(edad);
		}

		sexo= prompt("Ingrsese su sexo por favor: 'f' para femenino o 'm' para masculino ");
		while(!isNaN(sexo) || sexo!= 'f' && sexo!= 'm')
		{
			sexo= prompt("Error, ingrese un dato valido para sexo!! Ingrese: 'f' para femenino o 'm' para masculino ");
		}

		estadoCivil= prompt("Ingrese por favor su estado civil: 'soltero' - 'casado' - 'viudo' ");
		while(!isNaN(estadoCivil) || estadoCivil!= 'soltero'&& estadoCivil != 'casado' && estadoCivil!= 'viudo' )
		{
			estadoCivil= prompt("Error! Ingrese por favor su estado civil: 'soltero' - 'casado' - 'viudo' ");
		}
	
		temperatura= prompt("Ingrese temperatura corporal")
		temperatura= parseInt(temperatura);
		while(isNaN(temperatura)|| temperatura <28 && temperatura >45 )
   		{	
			temperatura=prompt("Error! Ingrese temperatura entre 28º - 45º ");
			temperatura= parseInt(temperatura);
    	}

		switch(estadoCivil)
		{
			case 'soltero':

				if(sexo== 'm')
				{	
					cantidadHombresSolteros++;
					acumuladorEdadHombresSolteros= acumuladorEdadHombresSolteros+ edad;
				}
				
			break;

			case 'viudo':

			if(edad>17)
			{
				cantidadMayoresViudos++;
			}

			if(sexo== 'm')
				{
					cantidadHombresViudos++;
				}
			
			break;

			case 'casado':
			
			break;

		}

		if(i==1|| temperatura>mayorTemperatura)
		{
			mayorTemperatura= temperatura;
			nombreMayorTemperatura= nombre;
		}

		if(i== 0 ||edad>60 && temperatura>38)
		{
			cantidadTerceraEdadMas38++;
		}


		respuesta= prompt("Desea seguir ingresando? Responda 'si' o 'no'");
     	while(!isNaN(respuesta) || respuesta!= 'si' && respuesta!= 'no')
     	{
        	respuesta= prompt("Error! Desea seguir ingresando? Escriba 'si' o 'no' ");
     	}

	}

	promedioEdadHombresSolteros= acumuladorEdadHombresSolteros/cantidadHombresSolteros;
	cantidadSolteOViu= cantidadHombresSolteros+ cantidadHombresViudos;

	document.write("El nombre de la persona con mas temperatura es: " + nombreMayorTemperatura + '<br>' );
	document.write("La  cantidad de  mayores de edad que estan viudos: " + cantidadMayoresViudos+ '<br>');
	document.write("La  cantidad de  de hombres que hay solteros o viudos es: " + cantidadSolteOViu +  '<br>') ;
	document.write("La cantidad de personas de la tercera edad que tienen mas de 38 de temperatura: " + cantidadTerceraEdadMas38 + '<br>');
	document.write("El promedio de edad entre los hombres solteros es: " + promedioEdadHombresSolteros + '<br>');*/
