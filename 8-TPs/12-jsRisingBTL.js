/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga 
de datos validada e ingresada por ventanas emergentes solamente 
(para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
	var estadoCivilIngresado;
	var mensaje;
	var sueldoBruto;
	var numeroDeLegajo;
	var nacionalidad;
	var mensajeN;
	
	edadIngresada= prompt("Ingrese su edad por favor: ");
	edadIngresada= parseInt(edadIngresada);
	while(isNaN(edadIngresada) || edadIngresada<18 || edadIngresada>90)
	{
		edadIngresada= prompt("Ingrese una edad valida en 18 y 90 por favor: ");
	}

	sexoIngresado= prompt("Ingrese su sexo por favor “M” para masculino y “F” para femenino: ");
	while(!isNaN(sexoIngresado) || sexoIngresado != 'F' && sexoIngresado != 'M')
	{
		sexoIngresado= prompt("Ingrese un dato valido por favor.  “M” para masculino y “F” para femenino: ");
	}
	
	estadoCivilIngresado= prompt(" Ingrese por favor su estado civil. 1- Para Soltero, 2- Para casados, 3- Para Divorciados y 4- Para Viudos")
	estadoCivilIngresado= parseInt(estadoCivilIngresado);
	while(isNaN(estadoCivilIngresado) || estadoCivilIngresado <1 || estadoCivilIngresado >4)
	{

		estadoCivilIngresado= prompt(" Por favor introduzca un dato valido. 1- Para Soltero, 2- Para casados, 3- Para Divorciados y 4- Para Viudos")
		
	}

	if(estadoCivilIngresado== 1)
	{
		mensaje= "Soltero";
	}
	else
	{
		if (estadoCivilIngresado==2)
		{
			mensaje= "Casado";
		}
		else
		{
			if(estadoCivilIngresado==3)
			{
				mensaje= "Divorciado";
			}
			else
			{
				mensaje= "Viudo";
			}
		}
	}
	estadoCivilIngresado= mensaje;
	
	sueldoBruto= prompt("Ingrese su sueldo Bruto");
	sueldoBruto= parseInt(sueldoBruto);
	while(isNaN(sueldoBruto) || sueldoBruto<8000)
	{
		sueldoBruto= prompt("Ingrese un dato valido por favor. Su sueldo Bruto no debe ser menor a $8000");
	}
			
		
	numeroDeLegajo= prompt("Ingrese su numero de Legajo sin ceros a la izquierda");
	numeroDeLegajo= parseInt(numeroDeLegajo);
	while(isNaN(numeroDeLegajo) || numeroDeLegajo<1000 || numeroDeLegajo>9999)
	{
		numeroDeLegajo= prompt("Por favor ingrese un dato valido. Ingrese su numero de Legajo sin ceros a la izquierda y no mayor a 4 cifras");
	}	

	nacionalidad= prompt("Ingrese su nacionalidad por favor: “A” para Argentinos, “E” para Extranjeros, “N” para Nacionalizados. ");
	while(!isNaN(nacionalidad)|| nacionalidad!= "A" && nacionalidad!= "E" && nacionalidad!= "N")
	{
		nacionalidad= prompt("Ingrese un dato valido para su nacionalidad por favor: “A” para Argentinos, “E” para Extranjeros, “N” para Nacionalizados. ");
	}
	switch(nacionalidad)
		{
			case "A":
				mensajeN= "Argentino";
				break;
			case "E":
				mensajeN= "Extranjero";
				break;
			default:
				mensajeN= "Nacionalizado";
				break;
		}
	nacionalidad= mensajeN;			

			
	txtIdEdad.value= edadIngresada;
	txtIdSexo.value= sexoIngresado;
	txtIdEstadoCivil.value= estadoCivilIngresado;
	txtIdSueldo.value= sueldoBruto;
	txtIdLegajo.value= numeroDeLegajo;
	txtIdNacionalidad.value= nacionalidad;
}//Morante Y.
