/* nivel 3:


el nombre de la persona mas vieja
el nombre de la persona mas joven

el sexo de la persona mas vieja
el sexo de la persona mas joven */
function mostrar()
{
	var edad;
	var nombre;
	var sexo;
	var nombrePersonaMasVieja;
	var nombrePersonaMasJoven;
	var sexoPersonaMasVieja;
	var sexoPersonaMasJoven;
	var contadorIngresados;
	var mayorEdad;
	var menorEdad;
	var mensaje


	contadorIngresados=0;
	respuesta= 'si';
	
	while(respuesta=="si")
	{
		contadorIngresados++;
		nombre= prompt("Ingrese su  nombre por favor: ");

		edad= prompt("Ingrese su edad por favor: ");
		edad=parseInt(edad);
		while(isNaN(edad)|| edad <0 || edad >120)
		{  
			edad= prompt("Ingrese un dato valido por favor. Ingrese su edad en un rango de 0 a 120 años : ");
			edad= parseInt(edad);
		}
	
		sexo= prompt("Ingrese su sexo por favor: 'f' para femenino o 'm' para masculino: ");
		while(!isNaN(sexo)|| sexo!= 'f' && sexo!= 'm')
		{
			sexo= prompt("Introduzca un dato valido por favor. Ingrese su sexo : 'f' para femenino o 'm' para masculino: ");
		}

		if(sexo=='f')
		{
			mensaje= " Femenino";
		}
		else
		{
			mensaje= " Masculino"
		}
		sexo= mensaje;

		if(contadorIngresados==1 || edad > mayorEdad)
		{
			mayorEdad= edad;
			nombrePersonaMasVieja= nombre;
			sexoPersonaMasVieja= sexo;
		}

		if(contadorIngresados==1 || edad<menorEdad)
		{
			menorEdad= edad;
			nombrePersonaMasJoven= nombre;
			sexoPersonaMasJoven= sexo;
		}

		

		respuesta=prompt("Desea seguir ingresando datos? Responda 'si' o 'no' :");
		while(!isNaN(respuesta) || respuesta != "si" && respuesta!= "no")
		{	
			respuesta=prompt("Por favor ingrese una respuesta valida. Desea seguir ingresando datos? Responda 'si' o 'no' :");
		}
	} 	  

	document.write("El nombre de la persona mas vieja es: "+ nombrePersonaMasVieja+ "<br>");
	document.write("El nombre de la persona mas joven es: " + nombrePersonaMasJoven + "<br>");
	document.write("El sexo de la persona mas vieja es: "+ sexoPersonaMasVieja + "<br>");
	document.write("El sexo de la persona mas joven es: "+ sexoPersonaMasJoven + "<br>");
		
}//Morante Y

/* /*Ingrese una edad(0 y 120), nombre y un sexo(f o m)
informar:
nivel 1:
cuantos son en total 
cuantos mayores de edad 
cuantos menores de edad 
cuantos adolescentes de edad 
la edad mas vieja;
la edad mas joven;
PROFE ESTE EN EL VERDADERO DEL NIVEL 1. EL ANTERIOR NO ESTABA COMPLETO :D
function mostrar()
{
	var edad;
	var cantidadIngresados;
	var cantidadMenores;
	var cantidadMayores;
	var cantidadAdolescentes;
	var mayorEdad;
	var menorEdad;
	var nombre;
	var respuesta;
	var sexo;

	respuesta= 'si';
	cantidadMenores=0;
	cantidadMayores=0;
	cantidadIngresados=0;
	cantidadAdolescentes=0;
	
	
while(respuesta=="si")
{
	cantidadIngresados++;

	nombre= prompt("Ingrese su  nombre por favor: ");

	edad= prompt("Ingrese su edad por favor: ");
	edad=parseInt(edad);
	while(isNaN(edad)|| edad <0 || edad >120)
	{  
		edad= prompt("Ingrese un dato valido por favor. Ingrese su edad en un rango de 0 a 120 años : ");	
	}
	
	sexo= prompt("Ingrese su sexo por favor: 'f' para femenino o 'm' para masculino: ");
	while(!isNaN(sexo)|| sexo!= 'f' && sexo!= 'm')
	{
		sexo= prompt("Introduzca un dato valido por favor. Ingrese su sexo : 'f' para femenino o 'm' para masculino: ");
	}

	if(edad>17)
	{
		cantidadMayores++
	}
	else
	{
		if(edad<18 && edad>12)
		{
			cantidadMenores++;
			cantidadAdolescentes++;
		}
		else
		{
			if(edad<13)
			{
				cantidadMenores++;
			}
		}
	}

	if(cantidadIngresados==1 || edad> mayorEdad)
	{
		mayorEdad= edad;
	}
	if(cantidadIngresados== 1 || edad< menorEdad)
	{
		menorEdad= edad;
	}
	
	respuesta=prompt("Desea seguir ingresando datos? Responda 'si' o 'no' :");
	while(!isNaN(respuesta) || respuesta != "si" && respuesta!= "no")
	{	
		respuesta=prompt("Por favor ingrese una respuesta valida. Desea seguir ingresando datos? Responda 'si' o 'no' :");
	}
	
} 

	document.write("La cantidad de mayores de edad es :"+ cantidadMayores+ "<br>");
	document.write("La cantidad de menores de edad es :" + cantidadMenores + "<br>");
	document.write("La cantidad de adolescentes es :"+ cantidadAdolescentes+ "<br>");
	document.write("La edad Mayor es : " + mayorEdad + "<br>");
	document.write("la edad menor es : "+ menorEdad+ "<br>");
	document.write("la cantidad de total de ingresados son :"+ cantidadIngresados+"<br>");
		
}//Morante Y*/

/* nivel:2

cuantas mujeres;
cuantos hombres;
cuantas adolescentes mujeres 
cuantos niños hombres 
el promedio de edad
el promedio de edad de las mujeres
el promedio de edad de los hombres
la cantidad de edades pares */
/*function mostrar()
{
	var edad;
	var nombre;
	var sexo;
	var cantidadIngresados;
	var cantidadMujeres;
	var cantidadHombres;
	var promedioEdad;
	var promedioEdadMujeres;
	var promedioEdadHombres;
	var cantidadEdadesPares;
	var contadorEdad;
	var acumuladorEdad;
	var respuesta;
	var contadorMujeresAdolescentes;
	var contadorEdadMujeres;
	var acumuladorEdadMujeres;
	var contadorEdadHombres;
	var acumuladorEdadHombres;
	var cantidadNiñosHombres;

	cantidadMujeres=0;
	cantidadHombres=0;
	cantidadEdadesPares= 0;
	contadorEdad= 0;
	acumuladorEdad=0;
	contadorMujeresAdolescentes= 0;
	cantidadNiñosHombres=0;
	contadorEdadMujeres= 0;
	acumuladorEdadMujeres=0;
	contadorEdadHombres=0;
	acumuladorEdadHombres=0;
	respuesta= 'si';
	
	while(respuesta=="si")
	{
		cantidadIngresados++;
		nombre= prompt("Ingrese su  nombre por favor: ");

		edad= prompt("Ingrese su edad por favor: ");
		edad=parseInt(edad);
		while(isNaN(edad)|| edad <0 || edad >120)
		{  
			edad= prompt("Ingrese un dato valido por favor. Ingrese su edad en un rango de 0 a 120 años : ");
			edad= parseInt(edad);
		}
	
		sexo= prompt("Ingrese su sexo por favor: 'f' para femenino o 'm' para masculino: ");
		while(!isNaN(sexo)|| sexo!= 'f' && sexo!= 'm')
		{
			sexo= prompt("Introduzca un dato valido por favor. Ingrese su sexo : 'f' para femenino o 'm' para masculino: ");
		}

		if(sexo== 'f')
		{
			cantidadMujeres++;
		}
		else
		{
			if(sexo== 'm')
			{
				cantidadHombres++;
			}
		}
	
		if( cantidadIngresados==0 || edad>0 || edad<120) 
		{
			contadorEdad++;
			acumuladorEdad= acumuladorEdad+ edad;
		}
	
		if(cantidadIngresados==0 || edad>0 || edad<120) 
		{
			if( sexo=='f')
			{
				contadorEdadMujeres++;
				acumuladorEdadMujeres= acumuladorEdadMujeres+ edad;
			}
		}
		
		if(cantidadIngresados==0  || edad>0 || edad<120) 
		{
			if(sexo=='m')
			{
				contadorEdadHombres++;
				acumuladorEdadHombres=acumuladorEdadHombres+edad;
			}
		}

		if(edad<18 && edad >12 && sexo== 'f')
		{
			contadorMujeresAdolescentes++;
		}
		else
		{
			if(edad<13 && sexo== 'm')
			{
				cantidadNiñosHombres++;
			}
		}
	
		if(edad % 2==0 && edad!=0)
		{
			cantidadEdadesPares++;
		}
	
		respuesta=prompt("Desea seguir ingresando datos? Responda 'si' o 'no' :");
		while(!isNaN(respuesta) || respuesta != "si" && respuesta!= "no")
		{	
			respuesta=prompt("Por favor ingrese una respuesta valida. Desea seguir ingresando datos? Responda 'si' o 'no' :");
		}
	} 
	  promedioEdad= acumuladorEdad/contadorEdad;
	  promedioEdadMujeres= acumuladorEdadMujeres/contadorEdadMujeres;
	  promedioEdadHombres= acumuladorEdadHombres/contadorEdadHombres;

	document.write("La cantidad de mujeres : "+ cantidadMujeres+ "<br>");
	document.write("La cantidad de hombres :" + cantidadHombres + "<br>");
	document.write("La cantidad de adolescentes mujeres es :"+ contadorMujeresAdolescentes + "<br>");
	document.write("La cantidad de niños hombres es :"+ cantidadNiñosHombres + "<br>");
	document.write("El promedio de edad es : " + promedioEdad + "<br>");
	document.write("El promedio de edad de las mujeres es: "+ promedioEdadMujeres+ "<br>");
	document.write("El promedio de edad de los hombres es: "+ promedioEdadHombres+"<br>");
	document.write("La cantidad de edades pares es : "+ cantidadEdadesPares+"<br>");*/

/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */

/*var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	var sumaPositivos;
	var cantidadNegativos;
	var cantidadCeros;
	var cantidadPositivos;
	var cantidadNumerosPares;
	var cantidadNumerosImpares;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPosiYNega;

	sumaNegativos=0;
	sumaPositivos=0;
	cantidadNegativos=0;
	cantidadCeros=0;
	cantidadNumerosPares=0;
	cantidadNumerosImpares=0,
	promedioPositivos=0;
	promediosNegativos=0;
	diferenciaPosiYNega=0;
	cantidadPositivos=0;
	respuesta='si';
		
	while(respuesta=="si")
	{
		numeroIngresado= prompt("Ingrese un numero por favor: ");
		numeroIngresado= parseInt(numeroIngresado);
	
		if(numeroIngresado==0)
		{
			cantidadCeros++;
		}
		else
		{
			if(numeroIngresado>0)
			{
				cantidadPositivos++;
				sumaPositivos= sumaPositivos+ numeroIngresado;

			}
			else
			{
				cantidadNegativos++;
				sumaNegativos= sumaNegativos+ numeroIngresado;
			}
		}
		
		if (numeroIngresado%2==0 && numeroIngresado!=0)
		{
			cantidadNumerosPares++;
		}

		
		respuesta=prompt("Desea continuar?");
	}
	diferenciaPosiYNega= sumaPositivos-sumaNegativos;
	promedioPositivos= sumaPositivos/cantidadPositivos;
	promediosNegativos= sumaNegativos/cantidadNegativos;
	
    document.write("La suma de negativos es :"+sumaNegativos+ "<br>");
	document.write("la suma de positivos es :"+sumaPositivos + "<br>");
	document.write("la cantidad de positivos es :"+ cantidadPositivos+ "<br>");
	document.write("la cantidad de negativos es :"+ cantidadNegativos+ "<br>");
	document.write("la cantidad de ceros es :"+cantidadCeros+ "<br>");
	document.write("la cantidad de pares es :"+cantidadNumerosPares+"<br>");
	document.write("El promedio de positivos es :"+promedioPositivos+"<br>");
	document.write("El promedio de negativos es :"+promediosNegativos +"<br>");
	document.write("La diferencia de positivos y negativos  es :"+diferenciaPosiYNega+ "<br>");*/