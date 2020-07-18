function mostrar()
{
	var numero;
    numero = Math.floor(Math.random() * 10 + 1);
   
	if (numero >= 9)
	{
		alert("EXCELENTE : " + numero);

	
   }
   else
   {
	   if (numero>4 && numero <9)
	   {
		alert("APROBO : " + numero); 
	   }
	   else
	   {
		alert("VAMOS LA PROXIMA SE PUEDE :  " + numero);  
	   }
   }
	
		

}//FIN DE LA FUNCIÓN