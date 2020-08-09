function mostrar()
{
	/*Al ingresar una edad debemos informar si la persona es adolescente, 
	edad entre 13 y 17 años (inclusive)*/
	
	var edad;

	edad= txtIdEdad.value;
	edad= parseInt(edad);

	if(edad>12)  
	{
	    if(edad <18 )
		{
	 	alert("Es adolescente");
		}
    }
	
}//Morante Y.
