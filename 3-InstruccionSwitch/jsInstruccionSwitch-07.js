function mostrar()
{
	//Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
	
	var destinoIngresado =txtIdDestino.value;

	switch(destinoIngresado)
	{
		case "Cataratas":
			alert("Se encuentra en el Norte del pais");
			break;
		
		case "Bariloche":
			alert("Se encuentra en el Oeste del pais");
			break; 
		
		case "Mar del plata":
			alert("Se encuentra en el Este del pais");
			break;

		default:
			alert("Se encuentra al Sur del pais");
			break;
}

}//Morante Y