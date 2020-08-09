function mostrar()
{	/*Se pide ingresar una edad y un estado cicvil
	a todos los mayores de edad, mostrar el mensaje "se responsable"
	a todos los menores de edad, mostrar el mensaje "respeta a tus mayores"
	a los adultos mayores( mas de 60 años) tambien informar "sos persona de riesgo"
	a los niños tambien informar "hagan la tarea" 
	a los adolescentes casado o Divorciado " sos muy joven para no ser soltero"
	a los mayores de edad solteros, tambien informar "a vivir la vida"
	a los mayores de edad casados , tambien informar "a disfrutar la pareja"
	a los divorciados informar tambien "a intentarlo nuevamente"*/
 
	var estadoCivil;
	var edad;
	var mensajeParaMostrar;
	
	edad=txtIdEdad.value;
	edad=parseInt(edad);
	estadoCivil = document.getElementById("estadoCivil").value;
	

		if(edad>17)	
		{
			
			mensajeParaMostrar= "Se responsable ";
	
			switch(estadoCivil)
			{
				case "Soltero":
					
				mensajeParaMostrar= mensajeParaMostrar + " A vivir la vida!!";
				break;
				
				case "Casado":
					
					
				mensajeParaMostrar= mensajeParaMostrar + " A disfrutar la pareja!!";
				break;
					
				case "Divorciado":
					
					
				mensajeParaMostrar= mensajeParaMostrar + " A intentarlo nuevamente!!";
				break;	
			}
			if(edad>60)
			{
				mensajeParaMostrar= "Sos persona de riesgo";	
			}
		}
		else
		{	
			if(edad<18)
			{
				mensajeParaMostrar= "Respeta a tus mayores.";
				
				if(edad<13)
				{
					mensajeParaMostrar= mensajeParaMostrar +  " Hagan la tarea";
				}
				else
				{
					switch(estadoCivil)
					{
						case "Casado":
						case "Divorciado":
							
						mensajeParaMostrar= mensajeParaMostrar + " Sos muy joven para no ser soltero.";
						break;
					}
				}
			}
		}
	alert(mensajeParaMostrar);
	
} //Morante Y


/*Al ingresar una edad menor a 18 años y un estado civil distinto a 
	"Soltero",NO HACER NADA, pero si no es asi, y es soltero y no es menor, 
	 mostrar el siguiente mensaje: 'Es soltero y no es menor.'
	var edad;
	
	var estadoCivil;
	var edad;
	
	edad=txtIdEdad.value;
	edad=parseInt(edad);
	estadoCivil = document.getElementById("estadoCivil").value;

	if (edad >17) 
	{
		if(estadoCivil == "Soltero")	
		{
			alert("Es soltero y no es menor");
		}
	}
	

	/*var estadoCivil;
	 var edad;

	edad=txtIdEdad.value;
	estadoCivil = document.getElementById("estadoCivil").value;

	if (edad >=18 && estadoCivil == "Soltero")
	{
		alert("Es soltero y no es menor");
	}*/