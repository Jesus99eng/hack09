/*Crear una función que se llame facturación().
La función debe recibir como parámetro el monto total y el medio de pago(C : Tarjeta de crédito, E: Efectivo, D:tarjeta debito).
 En el cual debe tener en cuenta la sgtes consideraciones: Si el monto  es menor a $200 no se aplicará ningún descuento. 
 Si el monto a abonar es entre $200 y $400 se aplicará un descuento del 30% si el medio de pago es efectivo, 20% si se realiza con débito y 10% con tarjeta de crédito. 
 Para montos mayores a $400, el descuento es 40% sin importar el medio de pago.
La función deberá retornar el monto final a abonar.*/


function facturacion (monto, medioPago){

    if (monto < 200) {
        
        return console.log (`El monto a pagar es de ${monto}`);
    } else if (monto < 400) {
        switch (medioPago) {
            case "C":
                console.log(`El monto es ${monto} y el pago es con tarjeta de credito, entonces tienes un descuento del 10%, la cual tu moto final es de  ${monto * 0.10}.`);
                break;
            case "E":
                console.log(`El monto es ${monto} y el pago es con efectivo, entonces tienes un descuento del 30 %, la cual tu moto final es de ${monto * 0.30}.`);
                break;
            case "D":
                console.log(`El monto es ${monto} y el pago es con tarjeta de debito entonces tienes un descuento del 20 % , la cual tu moto final es de ${monto * 0.20}.`);
                break;
            default:
                console.log("No ingresaste el medio de pago");
                break;
        } 
    }else {
        return console.log(`El monto es ${monto}, su monto es mayor a 400, entonces tiene un descuento del 40% , la cual tu moto final es de ${monto * 0.40}.`);
    }
}
facturacion(500,"E")


