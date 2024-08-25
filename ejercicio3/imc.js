/*

Solicita al usuario que inserte su peso en kg y la altura(mts).
Calcule el IMC dividiendo el peso entre la altura al cuadrado.
Muestre el IMC calculado al usuario y su clasificación según la tabla de IMC.
Ejemplo de entrada: Peso: 7okg, altura: 1.75m.
Salida esperada: IMC: 22.86 , clasificación: NOMAL


*/

let kilos
let altura
let imc
let obesidadmorb = 40;
kilos = parseFloat(prompt("ingresa kilos"));
altura = parseFloat(prompt("Ingresa altura"));
imc = kilos / (altura * altura);



if (imc < 17) {
    alert(`su peso es ${imc} y esta en sobre bajo peso`);

} else if (imc > 17 && imc <= 18.49) {
   
    alert(`su peso es ${imc} y esta en peso bajo`);

} else if (imc >= 18.5 && imc <= 24.99) {
    
    alert(`su peso es ${imc} y esta en peso normal`);
} else if (imc >= 25 && imc <= 29.99) {
    
    alert(`su peso es ${imc} y esta en sobre peso`);
} else if (imc >= 30 && imc <= 34.99) {
 
    alert(`su peso es ${imc} y esta en obesidad leve`);
} else if (imc >= 35 && imc <= 39) {

    alert(`su peso es ${imc} y esta en obesidad media`)
} else {
    (imc >= obesidadmorb)
    
    alert(`su peso es ${imc} y esta en obesidad morbida`);
}
