/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidadLamparas;
    var marcaLamparas;
    var precioSinDescuento;
    var precioConDescuento;
    var impuesto;
    var descuento;
    
    marcaLamparas= document.getElementById('Marca').value;
    cantidadLamparas=document.getElementById('txtIdCantidad').value;
    precioSinDescuento= cantidadLamparas* 35;

    
    switch (marcaLamparas)
    {
        case "ArgentinaLuz":

            if(cantidadLamparas>5)
            {
                descuento= 0.50;
            }
            else
            {
                if(cantidadLamparas==5)
                {
                    descuento= 0.40;
                }
                else
                {
                    if(cantidadLamparas==4)
                    {
                        descuento= 0.25;
                    }
                     else
                    {
                        if(cantidadLamparas==3)
                        {
                            descuento=0.15;
                        }
                        else
                        {       
                            if(cantidadLamparas<3)
                            {
                                descuento= 0;
                            }
                        }
                    }
                }
            }
        
            break;

        case "FelipeLamparas":
            
            if(cantidadLamparas>5)
            {
                descuento= 0.50;
            }
             else
            {
                if(cantidadLamparas==5)
                {
                    descuento= 0.30;
                }
                else
                {
                    if(cantidadLamparas==4)
                    {
                        descuento= 0.25;
                    }
                    else
                    {
                        if(cantidadLamparas==3)
                        {
                            descuento=0.10;
                        }
                        else
                        {
                            if(cantidadLamparas<3)
                            {
                                descuento= 0;
                            }
                        }
                    }
                }
            }

            break;

        default:
            
            if(cantidadLamparas>5)
            {
                descuento= 0.50;
            }
            else
            {
                if(cantidadLamparas==5)
                {
                    descuento= 0.30;
                }
                else
                {
                    if(cantidadLamparas==4)
                    {
                        descuento= 0.20;
                    }
                    else
                    {
                        if(cantidadLamparas==3)
                        {
                            descuento=0.05;
                        }
                        else
                        {
                            if(cantidadLamparas<3)
                            {
                                descuento= 0;
                            }
                        }
                    }
                }
            }
       
             break;
    }

   
    precioConDescuento= precioSinDescuento - (precioSinDescuento* descuento);
          
    if(precioConDescuento>120)
    {
        impuesto= precioConDescuento * 0.10;
        precioConDescuento= precioConDescuento + impuesto;
        
        alert("IIBB Usted pago : " + impuesto);
    }    
    
    txtIdprecioDescuento.value= precioConDescuento;
   
}// Morante Y

/* var cantidadLamparas;
    var marcaLamparas;
    var precioSinDescuento;
    var precioConDescuento;
    var impuesto;
    var descuento;

    
    marcaLamparas= document.getElementById('Marca').value;
    cantidadLamparas=document.getElementById('txtIdCantidad').value;
    precioSinDescuento= cantidadLamparas* 35;
   
   if(cantidadLamparas>5)
   {
       descuento= 0.50;
   }
   else
   {
        if(cantidadLamparas==5)
        {
            if(marcaLamparas == "ArgentinaLuz")
            {
                descuento= 0.40;
            }
            else
            {
                descuento= 0.30;
            }
        }
        else
        {
             if(cantidadLamparas== 4 ) 
            {
                if(marcaLamparas== "ArgentinaLuz" || marcaLamparas== "FelipeLamparas")
                {
                    descuento= 0.25;
                }
                else
                {
                    descuento= 0.20;
                }
            }
            else
            {

                if(cantidadLamparas== 3)
                {
                    if(marcaLamparas== "ArgentinaLuz")
                    {
                        descuento= 0.15;
                    }
                    else
                    {
                        if(marcaLamparas== "FelipeLamparas")
                        {
                           descuento = 0.10;
                        }
                        else
                        {
                            descuento= 0.05;
                        }
                    }
                }
                else
                {
                 precioConDescuento=  precioSinDescuento;
                }
            }
        }
    }

        precioConDescuento= precioSinDescuento - (precioSinDescuento* descuento);
              
    if(precioConDescuento>120)
    {
        impuesto= precioConDescuento * 0.10;
        precioConDescuento= precioConDescuento + impuesto;
        
        alert("IIBB Usted pago : " + impuesto);
    }     
    
    txtIdprecioDescuento.value= precioConDescuento;*/
