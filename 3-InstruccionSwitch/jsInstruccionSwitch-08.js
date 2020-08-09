function mostrar()
{	/*Al seleccionar un destino informar si hace FRIO o CALOR en ese destino*/

	var destinoIngresado =txtIdDestino.value;

	switch(destinoIngresado)
	{
		case "Cataratas":
			alert("Hace Calor!!");
			break;
		
		case "Bariloche":
			alert("Hace Frio!!");
			break; 
		
		case "Mar del plata":
			alert("Hace Calor");
			break;

		default:
			alert("Hace Frio!!");
			break;
}

}//Morante Y