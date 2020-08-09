/*Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros(validar entre 0 y 250) ,
 el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet, informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de muheres que su altura supere los 190 centimetros. */
function mostrar()
{
    var altura;
    var sexo;
    var i;
    var respuesta;
    var acumuladorAltura;
    var promedioAltura;
    var alturaMasbaja;
    var sexoMasBajo;
    var contadorMujeresAltas;

    i=0;
    respuesta= "si";
    acumuladorAltura=0;
    contadorMujeresAltas=0;

    while(respuesta=="si")
    {   
        i++;
        altura= prompt("Ingrese su altura en centimetros por favor");
        altura= parseInt(altura);
        while(isNaN(altura)|| altura<0 && altura>250)
        {
            altura= prompt("Error!! Ingrese su altura en centimetros por favor (0 a 250");
            altura= parseInt(altura);
        }

        sexo= prompt("Ingrese sus sexo por favor: 'f' para femenino o 'm' para masculino. ");
        while(!isNaN(sexo) || sexo!= 'f' && sexo!= 'm')
        {
            sexo= prompt("Error! Ingrese sus sexo por favor: 'f' para femenino o 'm' para masculino. ");
        }

        acumuladorAltura= acumuladorAltura+ altura;

        if(i==1|| altura< alturaMasbaja)
        {
            alturaMasbaja= altura;
            sexoMasBajo= sexo;
        }

       

        if(sexo == 'f' && altura>190)
        {
            contadorMujeresAltas++;
        }

        respuesta= prompt("Desea continuar? Responda 'si' o 'no'");
        while(!isNaN(respuesta)|| respuesta!= 'si'&& respuesta!= 'no')
        {
            respuesta= prompt("Error! Para continuar responda 'si' o 'no'");
        }
    }

    if(sexoMasBajo=="f")
    {
        sexoMasBajo= "Femenino";
    }
    else
    {
        sexoMasBajo= "Masculino";
    }

    promedioAltura= acumuladorAltura/i;

    document.write("El promedio de las alturas totales es : " + promedioAltura + '<br>');
    document.write("La altura más baja es : " + alturaMasbaja+ " y el sexo de esa persona es : " + sexoMasBajo + '<br>');
    document.write("La cantidad de mujeres que su altura supera los 190 centimetros : " + contadorMujeresAltas + '<br>');
        

}
