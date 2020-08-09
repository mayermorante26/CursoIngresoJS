function mostrar()
{
	var i;
	var numero;
	var bandera;

	numero= prompt("Ingrese un numero por favor: ");
	numero= parseInt(numero);
	bandera=true;

	for (i=2; i<=numero-1; i++)
    {
     
    if(numero %i ==0)
     {
        bandera=false;
     }
   }   
 
   if (bandera== true)
 	{
		document.write("El numero " + numero + " Es primo");
 	}
 	else
 	{      
		document.write("el numero: " + numero + " No es primo");
	}
	



}//FIN DE LA FUNCIÓN

/*	var numero;
	var divisores;
	var i;
	var bandera;

	bandera = true;
	divisores = 0;

	numero = prompt("Ingrese un numero");
	numero = parseInt(numero);
	for(i=1; i<numero+1; i++)
	{
		if(numero%i==0)
		{
			divisores++;
		}
		if(divisores==3)
		{
			
			bandera = false;
			break;
		}
	}
	if(bandera == true)
	{
		alert(numero + " es primo");
	}
	else
	{
		alert(numero + " NO es primo");
	}
	 */