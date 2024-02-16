/*let numeroingresado = prompt ("ingresar cualquier numero del 1 al 100")

if(numeroingresado<=100){
    for(numero=numeroingresado; numero>= 0;numero--){
        console.log(numero);
    }
}else{
    console.log("ingresar numero entre 1 y 100")
}*/


/*let numeroingresado = prompt ("ingresar cualquier numero del 1 al 10")

if(numeroingresado<=10){
    for(let i = 1; i<=10; i++){
        let resultado = numeroingresado*i
        console.log(resultado);
    }

}else{
    alert("ingresar numero entre 1 y 100")
}
*/


/*let suma = 0;

while (true) {
    let numeroIngresado = Number(prompt("Ingresa un número (ingresa 0 para finalizar)"));
    let numero = parseInt(numeroIngresado);

    if (numero === 0 || isNaN(numero)) {
        break;
    }

    suma += numero;
}

console.log("La suma de los números ingresados es: " + suma);
*/

/*let suma = 0;

do {
    let numeroIngresado = prompt("Ingresa un número (ingresa 0 para finalizar)");

    let numero = parseInt(numeroIngresado);

    if (numero === 0 || isNaN(numero)) {
        break;
    }

    suma += numero;

} while (true);

console.log("La suma de los números ingresados es: " + suma);*/



/*let numeroIngresado = prompt("Ingresa un número para encontrar sus divisores:");
let numero = parseInt(numeroIngresado);

console.log("Divisores de " + numero + ":");

for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
        console.log(i);
    }
}*/

/*const fechaLimite = "1997-8-3"
const fechas = ["1984-10-2", "1990-3-2", "1973-15-7", "2024-21-10", "2001-1-9"]

for(let i=0; i<= fechas.length; i++){
    if(fechas[i] > fechaLimite){
        console.log(fechas[i])
    }
}*/

/*const colores = ["rojo", "verde", "azul", "violeta", "amarillo", "celeste", "naranja", "rosa"]

for(let i of colores){
    console.log(i)
}*/

/*function f(){
    for(let i of colores){
        console.log(i)
    }
}*/

/*const numeros = [2, 3, 4, 5, 6]

for(let i of numeros){
    let doble = i*2
    console.log(`el numero es ${i} y su doble es ${doble}`)
}*/

/*const familiar = {
    nombre: "santiago",
    apellido: "martinez",
    edad: 25,
    integrante: "hermano"
}


for(let i= 0; i< Object.values(familiar).length; i++ ){
    console.log(`Hola soy nombre es ${familiar.nombre} ${familiar.apellido} (${familiar.integrante}) y tengo ${familiar.edad} años`)  
}*/

/*const persona = {
    nombre: "jorge",
    apellido: "sanchez",
    esColombiano: true,
    edad: 29,
    estudios: "universitarios"
}

for (let propiedades in persona){
    console.log(propiedades)
}*/
 
/*const persona = {
    nombre: "jorge",
    apellido: "sanchez",
    esColombiano: true,
    edad: 29,
    estudios: "universitarios"
}

for (let propiedades in persona){
    console.log(persona[propiedades])
}*/


/*let sumaimpar = 0;
let sumapar =0;

do {
    let numeroIngresado = Number(prompt("Ingresa un número (ingresa 0 para finalizar)"));
    let numero = parseInt(numeroIngresado);

    if (numero === 0 || isNaN(numero)){
        if (numero %2 === 0 ){
            sumapar += numero
            console.log(sumapar)
        }else{
            sumaimpar+=numero
            console.log(sumaimpar)
        }
    }
    
}while(true)

console.log("La suma de los números ingresados es: " + sumapar);
console.log("La suma de los números ingresados es: " + sumaimpar);*/
