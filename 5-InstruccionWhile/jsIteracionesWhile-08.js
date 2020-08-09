/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var respuesta;
	var numeroIgresado;
	var sumaPositivos;
	var multiplicacionNegativos;
	

	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while(respuesta== 'si')
	{
		
		numeroIgresado= prompt("Ingrese un numero: ");
		numeroIgresado= parseInt(numeroIgresado);
		
		if(numeroIgresado<0)
		{
			multiplicacionNegativos*= numeroIgresado;
		}
		else
		{
			sumaPositivos= sumaPositivos+ numeroIgresado;
		}
		

		respuesta= prompt("Desea seguir ingresando numeros? 'si' o 'no': ")
	}
	 if(multiplicacionNegativos==1 )
	 {
		txtIdProducto.value= "0";
	 }
	 else
	 {
		txtIdProducto.value=multiplicacionNegativos;
	 }

	txtIdSuma.value=sumaPositivos;
	

}//Morante Y