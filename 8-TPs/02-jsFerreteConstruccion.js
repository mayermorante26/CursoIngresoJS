/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var rectangulo;
    var rectanguloAlambre;

    largo=txtIdLargo.value;
    ancho=txtIdAncho.value;
    
    
    largo= parseInt(largo);
    ancho= parseInt(ancho);
    
   rectangulo= largo* ancho;
   rectanguloAlambre= rectangulo *3

    alert("La cantidad de alambre a comprar es: " + rectanguloAlambre + " cm^2");

}
function Circulo () 
{
    var pi;
    var radio;
    var circulo;
    var circuloAlambre;
    
    
    radio= txtIdRadio.value;
    radio= parseInt(radio);

    pi= 3.14;
    circulo= (radio * radio) * pi;
    circuloAlambre= circulo* 3;


    alert("La cantidad de alambre a comprar es : " + circuloAlambre + " cm^2");

}

function Materiales () 
{
    var largo;
    var ancho;
    var rectangulo;
    var bolasCemento;
    var bolsasCal;

    
    largo=txtIdLargo.value;
    ancho=txtIdAncho.value;
    rectangulo= largo* ancho;

    
    
    largo= parseInt(largo);
    ancho= parseInt(ancho);

    bolasCemento= rectangulo * 2;
    bolsasCal= rectangulo*3;
    
    alert("Se necesitan " + bolasCemento + " bolsas de Cemento" + " y "+ bolsasCal + " de Cal");
	
}