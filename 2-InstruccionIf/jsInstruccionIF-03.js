function mostrar()
{
/*Al ingresar una edad debemos informar si la persona 
es mayor de edad, sino informar que es un menor de edad.*/ 
	
var edad;

edad= txtIdEdad.value;
edad= parseInt(edad);

if (edad>17 )
{
 alert("Es mayor de Edad");

}
if (edad<18 )
{
	alert("Es menor de Edad");
}
	
}//Morante Y.