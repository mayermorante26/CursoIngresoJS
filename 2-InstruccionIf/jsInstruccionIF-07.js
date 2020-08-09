function mostrar()
{
	/*Al ingresar una edad menor a 18 años y un estado civil distinto 
	a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'*/

	var edad;
	var estadoCivil;

	edad=txtIdEdad.value;
	edad=parseInt(edad);
	
	estadoCivil= document.getElementById("estadoCivil").value;


	if (edad <18) 
	{
		if (estadoCivil != "Soltero")
		{
			alert("Es muy pequeño para NO ser  Soltero");
		}
	}	
	
		
	/*var edad;
	var estadoCivil;

	edad=txtIdEdad.value;
	estadoCivil = document.getElementById("estadoCivil").value;

	if (edad <18 && estadoCivil != "Soltero")
	{
		alert("Es muy pequeño para NO ser  Soltero");
	
	}*/


}//Morante Y.