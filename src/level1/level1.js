
// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

export function devolverString(str) {
  // Tu código:

  return str;  
}

export function suma(x,y) {
 // Tu código:

  return x + y;  
}

export function resta(x, y) {
 // Tu código:

  return x - y;
}

export function multiplica(x, y) {
  // Tu código:

  return x * y;
}

export function divide(x, y) { 
  // Tu código:

  return x / y;
}

export function sonIguales(x, y) {  
  // Tu código:

  return x === y ? true : false;  
}

export function tienenMismaLongitud(str1, str2) {  
  // Tu código:

  return str1.length === str2.length ? true : false;
}

export function menosQueNoventa(num) {  
  // Tu código:

  return num < 90 ? true : false;
}

export function mayorQueCincuenta(num) {  
  // Tu código:

  return num > 50 ? true : false;
}

export function obtenerResto(x, y) {  
  // Tu código:

  return x % y;
}

export function esPar(num) {
  // Tu código:

  return num%2 === 0 ? true : false;
}

export function esImpar(num) {  
  // Tu código:

  return num%2 === 1 ? true : false;
}

export function elevarAlCuadrado(num) {  
  // Tu código:

  return Math.pow(num,2);
}

export function elevarAlCubo(num) { 
  // Tu código:

  return num * num * num;
}

export function elevar(num, exponent) {  
  // Tu código:

  return Math.pow(num,exponent);
}

export function redondearNumero(num) {  
  // Tu código:

  return Math.round(num);
}

export function redondearHaciaArriba(num) { 
  // Tu código:

  return Math.ceil(num);
}

export function numeroRandom() {  
  // Tu código:

  return Math.random();
}

export function esPositivo(num) {
  // Tu código:
  
  if(numero === 0){
    return false;
  } else if(numero>0){
    return 'Es positivo';
  } else{
    return 'Es negativo';
  };
}

export function agregarSimboloExclamacion(str) {  
  // Tu código:

  return `${str} !`;
}

export function combinarNombres(nombre, apellido) {
  // Tu código:

  return `${nombre} ${apellido}`;
}

export function obtenerSaludo(nombre) {
  // Tu código:

  return `Hola ${nombre}!`;
}

export function obtenerAreaRectangulo(alto, ancho) {  
  // Tu código:

  return alto * ancho;
}


export function retornarPerimetro(lado){
  // Tu código:

  return lado * 4;
}


export function areaDelTriangulo(base, altura){
  // Tu código:

  return (base * altura)/2;
}


export function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares.
  // Tu código:

  return euro * 1.2;
}


export function esVocal(letra){
  // Tu código:

  if(letra.length>1){
    return 'dato incorrecto';
  }
  if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
    return 'Es vocal';
  }else{
    return 'No es vocal'
  }
}
