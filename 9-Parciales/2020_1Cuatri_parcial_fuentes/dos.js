/* Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion,
 hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/ 

function mostrar()
{
    var tipo;
    var cantidadBolsas;
    var precioBolsa;
    var i;
    var respuesta;
    var acumuladorBolsas;
    var importeProducto;
    var importeBruto;
    var precioMasCaro;
    var tipoMasCaro;
    var acumuladorArena;
    var acumuladorCemento;
    var acumuladorCal;
    var tipoMasCantidad;
    var descuento;
    var importeConDescuento;

    i=0;
    respuesta="si";
    acumuladorBolsas=0;
    importeBruto=0;
    acumuladorCal=0;
    acumuladorArena=0;
    acumuladorCemento=0;

    while(respuesta=="si")
    {
      i++;
      
      tipo= prompt("Ingrese el producto por favor: 'arena'- 'cal' - 'cemento'");
      while(!isNaN(tipo) || tipo !='arena' && tipo !='cal' && tipo !='cemento')
      {
        tipo= prompt("Error!! Ingrese el producto por favor: 'arena'- 'cal' - 'cemento'");
      }

      cantidadBolsas= prompt("Ingrese la cantidad de bolsas por favor: ");
      cantidadBolsas= parseInt(cantidadBolsas);
      while(isNaN(cantidadBolsas) || cantidadBolsas<1)
      {
        cantidadBolsas= prompt("Error!! Ingrese la cantidad de bolsas por favor! (minimo 1 unidad) ");
        cantidadBolsas= parseInt(cantidadBolsas);
      }

      precioBolsa= prompt("Ingrese el precio del producto por favor: ");
      precioBolsa= parseInt(precioBolsa);
      while(isNaN(precioBolsa) || precioBolsa<1)
      {
        precioBolsa= prompt("Error!! Ingrese el precio del producto por favor! (minimo $1) ");
        precioBolsa= parseInt(precioBolsa);
      }

      
      importeProducto= cantidadBolsas* precioBolsa;
      importeBruto= importeBruto+ importeProducto;

      switch(tipo)
      {
        case 'arena':

        acumuladorArena= acumuladorArena + cantidadBolsas;

        break;

        case 'cal':
          acumuladorCal= acumuladorCal + cantidadBolsas;

        break;

        case 'cemento':
          acumuladorCemento= acumuladorCemento + cantidadBolsas;

        break;
      }

      acumuladorBolsas= acumuladorCal+ acumuladorArena+ acumuladorCemento;

      if(i==1 || precioBolsa> precioMasCaro)
      {
        precioMasCaro= precioBolsa;
        tipoMasCaro= tipo;
      }


  
      respuesta= prompt("Desea seguir ingresando: Responda 'si' o 'no' ");
      while(!isNaN(respuesta) || respuesta != 'si' && respuesta !='no')
      {
        respuesta= prompt("Error!! Para seguir ingresando responda: 'si' o 'no' ");
      }

    }

    if(acumuladorArena> acumuladorCemento && acumuladorArena> acumuladorCal)
      {
        tipoMasCantidad= "arena";
      }
      else
      {
        if(acumuladorCemento>acumuladorArena)
        {
          tipoMasCantidad= "cemento";
        }
        else
        {
          tipoMasCantidad= "cal";
        }
      }

    if(acumuladorBolsas> 30)
    {
      descuento= 0.25;
    }
    else
    {
      if(acumuladorBolsas>10)
      {
        descuento= 0.15;
      }
      else
      {
        descuento= 0;
      }
    }

  importeConDescuento= importeBruto-(importeBruto* descuento);

  document.write("El importe total a pagar , bruto sin descuento es: " +  importeBruto + '<br>');
  document.write("El importe total a pagar  con descuento es: " +  importeConDescuento + '<br>');
  document.write("El tipo con mas cantidad de bolsas es: " +  tipoMasCantidad + '<br>');
  document.write("El tipo mas caro es: " +  tipoMasCaro + '<br>');
 


}// Morante Y.

//Este es el correcto.
/*var i; 
  var tipo;
  var cantidadBolsas;
  var precioBolsa;
  var respuesta;
  var acumuladorDeBolsas;
  var precioBrutoProducto;
  var precioBrutoTotal;
  var acumuladorArena;
  var acumuladorCemento;
  var acumuladorCal;
  var precioConDescuento;
  var descuento;
  var precioMasCaro;
  var tipoMasCaro;
  var tipoMasCantidad;
  
  
  i=0;
  respuesta= "si";
  acumuladorDeBolsas=0;
  precioBrutoTotal=0;
  acumuladorArena=0;
  acumuladorCemento=0;
  acumuladorCal=0;
  

  while(respuesta=="si")
  {
    i++;

    tipo= prompt("Ingrese el tipo de producto por favor: arena, cal o cemento");
    while(!isNaN(tipo))
    {
      tipo= prompt("Error!! Ingrese el tipo de producto de manera correcta por favor! Escriba: arena, cal o cemento");
    }

    cantidadBolsas= prompt("Ingrese por favor la cantidad de bolsas: ");
    cantidadBolsas=parseInt(cantidadBolsas);
    while(isNaN(cantidadBolsas) || cantidadBolsas <1 )
    {
      cantidadBolsas= prompt("Error! Ingrese por favor la cantidad de bolsas a partir de 1 unidad: ");
      cantidadBolsas=parseInt(cantidadBolsas);
    }

    precioBolsa= prompt("Ingrese por favor el precio: ")
    precioBolsa= parseInt(precioBolsa);
    while(isNaN(precioBolsa) || precioBolsa<0 )
    {
      precioBolsa= prompt("Error!! Ingrese por favor el precio de la bolsa a partir de $1: ")
      precioBolsa= parseInt(precioBolsa);
    }

    acumuladorDeBolsas= acumuladorDeBolsas+ cantidadBolsas;
    precioBrutoProducto= cantidadBolsas* precioBolsa;
    precioBrutoTotal= precioBrutoTotal+ precioBrutoProducto;


    switch(tipo)
    {
      case 'arena':
      acumuladorArena= acumuladorArena+cantidadBolsas;
    
      break;

      case 'cemento':

       acumuladorCemento= acumuladorCemento+ cantidadBolsas;
      break;

      case 'cal':
        acumuladorCal= acumuladorCal+ cantidadBolsas;
      break;
    }


    if(i==1 || precioBolsa>precioMasCaro)
    {
      precioMasCaro= precioBolsa;
      tipoMasCaro= tipo;
    }

    respuesta=prompt("Desea seguir ingresando datos? Responda 'si' o 'no' :");
		while(!isNaN(respuesta) || respuesta != "si" && respuesta!= "no")
		{	
			respuesta=prompt("Por favor ingrese una respuesta valida. Desea seguir ingresando datos? Responda 'si' o 'no' :");
		}
    
  }

  if(acumuladorDeBolsas>30)
  {
    descuento= 0.25;
  }
  else
  {
    if(acumuladorDeBolsas>10)
    {
      descuento= 0.15;
    }
    else
    {
      descuento=0;
    }
  }

  if(acumuladorArena> acumuladorCal && acumuladorArena> acumuladorCemento)
  {
    tipoMasCantidad= "arena";
  }
  else
  {
    if(acumuladorCemento>acumuladorArena)
    {
      tipoMasCantidad= "cemento";
    }
    else
    {
      tipoMasCantidad= "cal";
    }
  }

  precioConDescuento= precioBrutoTotal-(precioBrutoTotal*descuento);
  

  document.write("El importe total a pagar bruto sin descuento es: " + precioBrutoTotal + '<br>');
  document.write("El importe total a pagar con descuento: " + precioConDescuento+ '<br>' );
  document.write("El tipo con mas cantidad de bolsas es: " + tipoMasCantidad + '<br>');
  document.write("El tipo mas caro es: " + tipoMasCaro+ '<br>'); */ //Este es el correcto

/*var i; 
  var tipo;
  var cantidadBolsas;
  var precioBolsa;
  var respuesta;
  var totalConDescuento;
  var tipoMasCantidad;
  var tipoMasCaro;
  var montoAPagar;
  var descuento;
  var mayorCantidadBolsas;
  var precioMasCaro;
  var acumuladorArena;
  var acumuladorPrecioArena;
  var montoArena;
  var montoCemento;
  var montoCal;
  var montoCementoDescuento;
  var montoArenaDescuento;
  var montoCalDescuento;
  var acumuladorArenaDescuento;
  var acumuladorCementoDescuento;
  var acumuladorCemento;
  var acumuladorCalDescuento;
  var acumuladorCal;
  
  
  i=0;
  respuesta= "si";
  acumuladorArena= 0;
  acumuladorPrecioArena=0;
  acumuladorArenaDescuento=0;
  acumuladorCementoDescuento=0;
  acumuladorCemento=0;
  acumuladorCalDescuento=0;
  acumuladorCal=0;

  while(respuesta=="si")
  {
    i++;

    tipo= prompt("Ingrese el tipo de producto por favor: arena, cal o cemento");
    while(!isNaN(tipo))
    {
      tipo= prompt("Error!! Ingrese el tipo de producto de manera correcta por favor! Escriba: arena, cal o cemento");
    }

    cantidadBolsas= prompt("Ingrese por favor la cantidad de bolsas: ");
    cantidadBolsas=parseInt(cantidadBolsas);
    while(isNaN(cantidadBolsas) || cantidadBolsas <1 )
    {
      cantidadBolsas= prompt("Error! Ingrese por favor la cantidad de bolsas a partir de 1 unidad: ");
      cantidadBolsas=parseInt(cantidadBolsas);
    }

    precioBolsa= prompt("Ingrese por favor el precio: ")
    precioBolsa= parseInt(precioBolsa);
    while(isNaN(precioBolsa) || precioBolsa<0 )
    {
      precioBolsa= prompt("Error!! Ingrese por favor el precio de la bolsa a partir de $1: ")
      precioBolsa= parseInt(precioBolsa);
    }

    switch(tipo)
    {
      case 'arena':

      
        if(cantidadBolsas>30)
        {
          descuento= 0.25;
        }
        else
        {
          if(cantidadBolsas>10)
          {
            descuento= 0.15;
          }
          else
          {
            descuento= 0;
          }
        }
      
      montoArena= precioBolsa* cantidadBolsas;
      montoArenaDescuento= montoArena-(montoArena*descuento);
      acumuladorArena= acumuladorArena+ montoArena;
      acumuladorArenaDescuento= acumuladorArenaDescuento+ montoArenaDescuento;
      
      break;

      case 'cemento':
       
        if(cantidadBolsas>30)
        {
          descuento= 0.25;
        }
        else
        {
          if(cantidadBolsas>10)
          {
            descuento= 0.15;
          }
          else
          {
            descuento= 0;
          }
        }

          montoCemento= cantidadBolsas* precioBolsa;
          montoCementoDescuento= montoCemento-(montoCemento* descuento);
          acumuladorCemento= acumuladorCemento+ montoCemento;
          acumuladorCementoDescuento= acumuladorCementoDescuento+ montoCementoDescuento;
          break;

      case 'cal':

        if(cantidadBolsas>30)
        {
          descuento= 0.25;
        }
        else
        {
          if(cantidadBolsas>10)
          {
            descuento= 0.15;
          }
          else
          {
            descuento= 0;
          }
        }

        montoCal= cantidadBolsas* precioBolsa;
        montoCalDescuento= montoCal-(montoCal* descuento);
        acumuladorCal= acumuladorCal+ montoCal;
        acumuladorCalDescuento= acumuladorCalDescuento+ montoCalDescuento;
        break;
    }

    if(i==1 || cantidadBolsas>mayorCantidadBolsas)
    {
      mayorCantidadBolsas= cantidadBolsas;
      tipoMasCantidad= tipo;
    }

    if(i==1 || precioBolsa>precioMasCaro)
    {
      precioMasCaro= precioBolsa;
      tipoMasCaro= tipo;
    }

    respuesta=prompt("Desea seguir ingresando datos? Responda 'si' o 'no' :");
		while(!isNaN(respuesta) || respuesta != "si" && respuesta!= "no")
		{	
			respuesta=prompt("Por favor ingrese una respuesta valida. Desea seguir ingresando datos? Responda 'si' o 'no' :");
		}
    
  }

  montoAPagar= acumuladorArena + acumuladorCal + acumuladorCemento;
  totalConDescuento= acumuladorArenaDescuento + acumuladorCalDescuento + acumuladorCementoDescuento;

  document.write("El importe total a pagar bruto sin descuento es: " + montoAPagar + '<br>');
  document.write("El importe total a pagar con descuento: " + totalConDescuento+ '<br>' );
  document.write("El tipo con mas cantidad de bolsas es: " + tipoMasCantidad + '<br>');
  document.write("El tipo mas caro es: " + tipoMasCaro+ '<br>'); */
