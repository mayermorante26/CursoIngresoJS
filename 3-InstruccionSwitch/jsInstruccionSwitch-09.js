function mostrar()
{	/*una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base,
	 se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final
	en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%
	en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%
	en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% 
	y Cordoba tiene el precio sin descuento*/

	var estacionIngresada; 
	var destino;
	var tarifaBase;
	var porcentaje;
	var precioFinal;

	
	estacionIngresada =txtIdEstacion.value;
	destino=txtIdDestino.value;
	tarifaBase= 15000;
	

	switch(destino)
	{
		case "Cataratas":
			
		if(estacionIngresada== "Invierno")
		{
		porcentaje = -0.10;
		}
		else
		{
			if(estacionIngresada== "Verano")
			{
				porcentaje= 0.10;
			}
			else
			{
			  porcentaje= 0.10;
			}
		}
			break;
		
		case "Bariloche":
			if(estacionIngresada== "Invierno")
			{
			porcentaje = 0.20;
			}
			else
			{
				if(estacionIngresada== "Verano")
				{
					porcentaje= -0.20;
				}
				else
				{
				  porcentaje= 0.10;
				}
			}
			break; 
		
		case "Mar del plata":
			if(estacionIngresada== "Invierno")
			{
			porcentaje = -0.20;
			}
			else
			{
				if(estacionIngresada== "Verano")
				{
					porcentaje= 0.20;
				}
				else
				{
				  porcentaje= 0.10;
				}
			}
			break;

		default:
			if(estacionIngresada== "Invierno")
			{
			porcentaje = -0.10;
			}
			else
			{
				if(estacionIngresada== "Verano")
				{
					porcentaje= 0.10;
				}
			}
			break;
	}
	
	precioFinal= tarifaBase+(tarifaBase*porcentaje);

	if(destino=="Cordoba")
	{
		if(estacionIngresada== "Otoño" || estacionIngresada== "Primavera")
		{
			precioFinal= tarifaBase;
		}
	}

	alert("Usted debe pagar : " + precioFinal);

}//Morante Y