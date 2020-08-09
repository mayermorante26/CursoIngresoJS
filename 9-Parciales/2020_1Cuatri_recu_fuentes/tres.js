/*Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") 
y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros. */
function mostrar()
{
	var i;
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperatura;
	var respuesta;
	var mayortemperatura;
	var nacionalidadMasTemperatura;
	var contadorMayoresSolteros;
	var contadorMayoresTemperatura;
	var acumuladorEdadCasadas;
	var contadorMujeresCasadas;
	var contadorMujeresSolteras;
	var promedioEdadMujeresCasadas;
	var contadorMujeresViudas;
	var cantidadMujSoltOViu;
	
	i=0;
	respuesta= 'si';
	contadorMayoresSolteros=0;
	contadorMayoresTemperatura=0;
	acumuladorEdadCasadas=0;
	contadorMujeresCasadas=0;
	contadorMujeresSolteras=0;
	contadorMujeresViudas= 0;

	while(respuesta== "si")
	{
		i++;

		nombre= prompt("Ingrese su nombre por favor: ");

		nacionalidad= prompt("Ingrese su nacionalidad por favor: ");

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
		temperatura= parseFloat(temperatura);
		while(isNaN(temperatura)|| temperatura <28 && temperatura >45 )
   		{	
			temperatura=prompt("Error! Ingrese temperatura entre 28º - 45º ");
			temperatura= parseFloat(temperatura);
    	}

		switch(estadoCivil)
		{
			case 'casado':

			if(sexo== 'f')
			{
				contadorMujeresCasadas++;
				acumuladorEdadCasadas= acumuladorEdadCasadas+ edad;
			}


			break;

			case 'soltero':

			if(edad>17)
			{
				contadorMayoresSolteros++;
			}
			if(sexo== 'f')
			{
				contadorMujeresSolteras++;
			}

			break;

			case 'viudo':
			
			if(sexo== 'f')
			{
				contadorMujeresViudas++;
			}

			break;
		}

		if(i== 1 || temperatura> mayortemperatura)
		{
			mayortemperatura= temperatura;
			nacionalidadMasTemperatura= nacionalidad;
		}

		if(i==0|| edad>60 && temperatura >38)
		{
			contadorMayoresTemperatura++;
		}


		respuesta= prompt("Desea seguir ingresando? Responda 'si' o 'no'");
     	while(!isNaN(respuesta) || respuesta!= 'si' && respuesta!= 'no')
     	{
        	respuesta= prompt("Error! Desea seguir ingresando? Escriba 'si' o 'no' ");
     	}
	}

	promedioEdadMujeresCasadas= acumuladorEdadCasadas/contadorMujeresCasadas;
	cantidadMujSoltOViu= contadorMujeresSolteras+ contadorMujeresViudas;

	document.write("La nacionalidad de la persona con mas temperatura es: " + nacionalidadMasTemperatura + '<br>' );
	document.write("La  cantidad de  mayores de edad que estan solteros: " + contadorMayoresSolteros+ '<br>');
	document.write("La  cantidad de  de mujeres que hay solteros o viudos es: " + cantidadMujSoltOViu +  '<br>') ;
	document.write("La cantidad de personas de la tercera edad que tienen mas de 38 de temperatura: " + contadorMayoresTemperatura + '<br>');
	document.write("El promedio de edad entre las mujeres casadas es: " + promedioEdadMujeresCasadas + '<br>');
}
