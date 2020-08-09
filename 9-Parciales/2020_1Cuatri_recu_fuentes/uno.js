/*Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total */
function mostrar()
{
	var tipo;
	var precio;
	var cantidad;
	var marca;
	var fabricante;
	var i;
	var contadorAlcohol;
	var acumuladorAlcohol;
	var contadorJabon;
	var acumuladorJabon;
	var contadorBarbijo;
	var acumuladorBarbijo;
	var precioMasCaro;
	var cantidadJabonCaro;
	var fabricanteJabonCaro;
	var promedio;

	i=0;
	contadorAlcohol=0;
	acumuladorAlcohol=0;
	contadorBarbijo=0;
	acumuladorBarbijo=0;
	contadorJabon=0;
	acumuladorJabon=0;


	while(i<5)
	{
		i++; 

		tipo= prompt("Ingrese el producto por favor: 'alcohol' - 'jabon' - 'barbijo' ");
		while(!isNaN(tipo)|| tipo != 'alcohol' && tipo != 'jabon' && tipo != 'barbijo')
		{
			tipo= prompt("Error!! Ingrese el producto correcto por favor: 'alcohol' - 'jabon' - 'barbijo' ");
		}

		precio=prompt("Ingrese el precio del producto por favor: ");
		precio=parseInt(precio);
		while(isNaN(precio)|| precio<100 || precio> 300 )
		{
			precio=prompt("Error!! Ingrese el precio del producto por favor ($100 - $300): ");
			precio=parseInt(precio);
		}
		

		cantidad= prompt("Ingrese la cantidad de productos por favor: ");
		cantidad= parseInt(cantidad);
		while(isNaN(cantidad)|| cantidad<1 || cantidad>1000)
		{
			cantidad= prompt("Error!! Ingrese la cantidad de productos por favor (1 - 1000): ");
			cantidad= parseInt(cantidad);
		}
	
		marca=prompt("Ingrese la marca del producto por favor:");

		fabricante= prompt("Ingrese el fabricante del producto por favor: ")

		switch(tipo)
		{
			case 'alcohol':

				contadorAlcohol++;
				acumuladorAlcohol= acumuladorAlcohol+cantidad;

			break;

			case 'barbijo':

				contadorBarbijo++;
				acumuladorBarbijo= acumuladorBarbijo+ cantidad;

			break;

			case 'jabon':
				
				contadorJabon++;
				acumuladorJabon= acumuladorJabon+ cantidad;

			break;

		}
	
		if(i==1 || precio> precioMasCaro && tipo== 'jabon' )
		{
			precioMasCaro= precio;
			cantidadJabonCaro= cantidad;
			fabricanteJabonCaro= fabricante;
		}
	
	}

	

	if (acumuladorAlcohol> acumuladorBarbijo && acumuladorAlcohol> acumuladorJabon)
	{
		promedio= acumuladorAlcohol/ contadorAlcohol;
	}
	else
	{
		if(acumuladorBarbijo> acumuladorJabon && acumuladorBarbijo> acumuladorAlcohol)
		{
			promedio= acumuladorBarbijo/ contadorBarbijo;
		}
		else
		{
			promedio= acumuladorJabon/ contadorJabon;
		}
	}

	document.write("Del más caro de los jabones  la cantidad de unidades es: " +  cantidadJabonCaro + " y el fabricante es: " + fabricanteJabonCaro+ '<br>');
	document.write(" El promedio por compra del tipo de producto con más unidades es: " + promedio + '<br>' );
	document.write("La cantidad de Barbijos que se compraron en total es: " + acumuladorBarbijo+ '<br>');

} //Morante Y
