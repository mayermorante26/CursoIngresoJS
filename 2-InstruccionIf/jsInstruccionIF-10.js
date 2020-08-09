function mostrar()
{
	/* Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
	"EXCELENTE" para notas igual a 9 o 10,
	"APROBÓ" para notas mayores a 4,
	"Vamos, la proxima se puede" para notas menores a 4*/

	var numeroAleatorio;
    numeroAleatorio = Math.floor(Math.random() * 10 + 1);
   
	if (numeroAleatorio > 8)
	{
		alert("EXCELENTE!!");
    }
   else
   {
	   if (numeroAleatorio>3)
	   {
			alert("APROBO!!"); 
	   }
	   else
	   {
			alert("VAMOS LA PROXIMA SE PUEDE!!");  
	   }
   }

}//Morante Y