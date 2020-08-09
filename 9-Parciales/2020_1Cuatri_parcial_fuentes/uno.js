/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/

function mostrar()
{

	var tipo;
	var precio;
	var cantidad;
	var marca;
	var fabricante;
	var i;
	var fabricanteMasBarato;
	var cantidadMasBarato;
	var precionMasBarato;
	var contadorAlcohol;
	var acumuladorAlcohol;
	var contadorBarbijo;
	var acumuladorBarbijo;
	var contadorJabon;
	var acumuladorJabon;
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
		while(!isNaN(tipo)|| tipo !='alcohol' && tipo !='jabon' && tipo !='barbijo')
		{
			tipo= prompt("Error!! Ingrese el producto por favor: 'alcohol' - 'jabon' - 'barbijo' ");
		}

		precio= prompt("Ingrese el precio del producto por favor ");
		precio= parseFloat(precio);
		while(isNaN(precio)|| precio<1 || precio >300)
		{
			precio= prompt("Error!! Ingrese el precio de producto por favor (1- 300)");
			precio= parseFloat(precio);
		}

		cantidad= prompt("Ingrese el cantidad de productos por favor: ");
		cantidad= parseFloat(cantidad);
		while(isNaN(cantidad)|| cantidad<1 || cantidad >1000)
		{
			cantidad= prompt("Error!! Ingrese el cantidad de producto por favor (1- 1000)");
			cantidad= parseFloat(cantidad);
		}

		marca= prompt("Ingrese la marca del producto por favor: ");

		fabricante= prompt("Ingrese el fabricante del producto por favor: ");


		switch(tipo)
		{
			case 'alcohol':
				contadorAlcohol++;
				acumuladorAlcohol= acumuladorAlcohol+ cantidad;

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

		if(i==1 || precio< precionMasBarato && tipo=='alcohol')
		{
			precionMasBarato=precio;
			fabricanteMasBarato= fabricante;
			cantidadMasBarato= cantidad;
		}
	}
	
	if(acumuladorAlcohol> acumuladorBarbijo && acumuladorAlcohol> acumuladorJabon)
	{
		promedio= acumuladorAlcohol/contadorAlcohol;
	}
	else
	{
		if(acumuladorBarbijo> acumuladorAlcohol)
		{
			promedio= acumuladorBarbijo/ contadorBarbijo;
		}
		else
		{
			promedio= acumuladorJabon/contadorJabon;
		}
	}
	
	document.write("Del más barato de los alcohol, la cantidad de unidades es " + cantidadMasBarato  + " y su fabricante: " + fabricanteMasBarato+ '<br>');
	document.write("Del tipo con mas unidades, el promedio por compra es:  " + promedio  + '<br>');
	document.write("La cantidad de unidades de jabones hay en total es: " + acumuladorJabon+ '<br>' );

} //Morante Y

/* var tipo;
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
	document.write("La cantidad de unidades de jabon es : " + acumuladorJabon + '<br>');*/
