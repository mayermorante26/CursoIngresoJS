/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numUno;
	var numDos;
	var suma;
	 
	numUno= txtIdNumeroUno.value;
	numDos= txtIdNumeroDos.value;

	numUno= parseInt(numUno);
	numDos= parseInt(numDos);

	suma= numUno + numDos;
	
	alert("La suma es " + suma);

	}

function restar()
{
	var numUno;
	var numDos;
	var resta;
	numUno= txtIdNumeroUno.value;
	numDos= txtIdNumeroDos.value;

	numUno= parseInt(numUno);
	numDos= parseInt(numDos);

	resta=numUno- numDos;

	alert("La resta es " + resta);
	
}

function multiplicar()
{ 
	var numUno;
	var numDos;
	var multiplicacion;

	numUno= txtIdNumeroUno.value;
	numDos= txtIdNumeroDos.value;
	
	numUno= parseInt(numUno);
	numDos= parseInt(numDos);

	multiplicacion= numUno * numDos;

	alert("La multiplicacion es " + multiplicacion);

}

function dividir()
{
	var numUno;
	var numDos;
	var division;

	numUno= txtIdNumeroUno.value;
	numDos= txtIdNumeroDos.value;
	
	numUno= parseInt(numUno);
	numDos= parseInt(numDos);

	division= numUno/ numDos;
	alert("La division es " + division);

}

