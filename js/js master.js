//trabajando con API - pixabay.com
// siempre cuando se trabaja con API - Es una respuesta que no sabemos no la vamos a conceder 
// ----Aclarando Funciones en JavaScript
// Funcion declarativa
//Parametros de la funcion
function sumar (valor1, valor2){
    return valor1 + valor2;
}
function restar (valor1,valor2){
    return valor1 - valor2;
}
/*console.log("sumar");
//console.log(sumar (100,500));
//console.log(sumar (1000,2500));
console.log( sumar (10000,1500));
console.log ("restar");
console.log(restar (500,200));
console.log(restar(200,100));
*/
// Funciones expresadas 
let multiplicar = function (valor1,valor2){
    return valor1 * valor2;
}
//console.log("Multiplicar");
//console.log(multiplicar (2,5));

// Trabajando funciones usando Arrow Function (funciones flecha -ECMA-6-2015)
let dividir = (valor1,valor2)=>{
    if(valor1 == 0 || valor2 == 0){
    alert(" No puede devidir entre cero")
    Exit;
    }else{
        return valor1 / valor2;
    }
    
}
// Otra forma de usar las Arrow function
//let dividir = (valor1,valor2)=>valor1 / valor2;
//console.log("dividir");
console.log(dividir(100,2));
// pedir al usuario dos valores y que tipo de operacion desea 
let valor1 = Number(prompt("indique un valor"));
let valor2 = Number(prompt ("Indique un segundo valor"));
let operacion = prompt ("Indique la operacion que desee :sumar-restar-multiplicar- dividir").toUpperCase();

//Condicionales o condiciones
if(operacion == "SUMAR"){
    alert("El resultado  de" + valor1 + " + " + valor2 + " = " + sumar (valor1 , valor2));
    
}else if(operacion == "RESTAR"){
    alert(`El resultado de  ${valor1}  - ${valor2}  = ${restar(valor1,valor2)}`);

}else if(operacion == "MULTIPLICAR"){
    alert(`El resultado de  ${valor1}  * ${valor2}  = ${multiplicar(valor1,valor2)}`);
}else if(operacion == "DIVIDIR"){
    alert(`El resultado de  ${valor1}  / ${valor2}  = ${dividir(valor1,valor2)}`);
}alert("deve indicar:sumar -restar-multiplicar-dividir");

// EXISTE OTRO RECURSO QUE NOS DA JAVASCRIPT QUE SE LLAMA SWITCH

