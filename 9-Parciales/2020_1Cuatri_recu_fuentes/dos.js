/*Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, 
hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro*/ 

function mostrar()
{
  var tipo;
	var precio;
	var cantidad;
	var marca;
	var fabricante;
	var i;
	var precioAMasBarato;
	var fabricanteMasBarato;
	var acumuladorJabon;
	var acumuladorAlcohol;
	var acumuladorBarbijo;
	var contadorJabon;
	var contadorBarbijo;
	var contadorAlcohol;
	var mayorUnidades;
	var tipoMasUnidades;
	var promedio;
	var contadorMayorUnidades;
	var acumuladorMayorUnidades;
	var cantidadAlcoholBarato;

	i=0;
	acumuladorAlcohol=0;
	acumuladorJabon=0;
	acumuladorBarbijo=0;
	contadorJabon=0;
	contadorBarbijo=0;
	contadorAlcohol=0;
	contadorMayorUnidades=0;
	acumuladorMayorUnidades=0;



	while(i<5)
	{
		i++;
		tipo= prompt("Ingrese producto por favor: 'barbijo' - 'jabon' - 'alcohol'");
		while(!isNaN(tipo)|| tipo != 'barbijo' && tipo != 'jabon' && tipo != 'alcohol')
		{
			tipo= prompt("Error, ingrese un dato valido por favor!! Ingrese producto por favor: 'barbijo' - 'jabon' - 'alcohol'");
		}

		precio= prompt("Ingrese el precio del producto por favor: ");
		precio= parseInt(precio);
		while(isNaN(precio) || precio<100 || precio>300)
		{
			precio= prompt("Error!! Ingrese un precio entre $100 y $300: ");
			precio= parseInt(precio);
		}

		cantidad= prompt("Ingrese la cantidad de productos por favor:");
		cantidad= parseInt(cantidad);
		while(isNaN(cantidad) || cantidad<1 || cantidad>1000)
		{
			cantidad= prompt("Error!! Ingrese la cantidad de productos por favor de 1 hasta 1000 unidades:");
			cantidad= parseInt(cantidad);
		}

		marca=prompt("Ingrese la marca del producto por favor: ");

		fabricante= prompt("Ingrese el fabricante del producto por favor: ");

			switch(tipo)
			{
				case 'barbijo':
					
				contadorBarbijo++;
				acumuladorBarbijo= acumuladorBarbijo+ cantidad;
				
				break;

				case 'jabon':

				contadorJabon++;
				acumuladorJabon= acumuladorJabon+ cantidad;

				break;

				case 'alcohol':

				contadorAlcohol++;
				acumuladorAlcohol= acumuladorAlcohol+ cantidad;

				break;
			}
		
			if(i==1 || precio< precioAMasBarato && tipo== 'alcohol') 
			{
				precioAMasBarato= precio;
				cantidadAlcoholBarato= cantidad;
				fabricanteMasBarato= fabricante;
			}
	}
		
		if(acumuladorAlcohol> acumuladorBarbijo && acumuladorAlcohol> acumuladorJabon )
		{
			promedio= acumuladorAlcohol/contadorAlcohol;
		}
		else
		{
			if(acumuladorJabon> acumuladorBarbijo && acumuladorJabon> acumuladorAlcohol)
			{
				promedio= acumuladorJabon/contadorJabon;
			}
			else
			{
				if(acumuladorBarbijo> acumuladorJabon && acumuladorBarbijo> acumuladorAlcohol)
				{
					promedio= acumuladorBarbijo/ contadorBarbijo;
				}
				
			}
		}
	
	document.write("La cantidad de unidades del alcohol mas barato es: "+ cantidadAlcoholBarato + " y su fabricante es: " + fabricanteMasBarato + '<br>');
	document.write("El promedio por compra del tipo con mas unidades: " + promedio + '<br>');
	document.write("La cantidad de unidades de jabon es : " + acumuladorJabon + '<br>');

  
}
