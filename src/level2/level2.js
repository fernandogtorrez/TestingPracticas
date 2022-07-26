// No cambies los nombres de las funciones.

export function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Tu código:
  if(x === y){
    return x + y
  }
  if(x>y){
    return x
  }else{
    return y
  }
}

export function mayoriaDeEdad(edad) {
  // Tu código:
  edad >= 18 ? 'Allowed' : 'Not allowed'
}
  
export function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  // Tu código:
  if(status === 1){
    return 'Online'
  }else if(status === 2){
    return 'Away'
  }else{
    return 'Offline'
  }
}

export function saludo(idioma) {  
  // Tu código:
  switch (idioma){
    case 'aleman':
      return 'Guten Tag'
    case 'mandarin':
      return 'Ni hao'
    case 'ingles':
      return 'Hello'
    default:
      return 'Hola'
  }
}

export function colors(color) {  
  //Usar el statement Switch.
  // Tu código:
  switch (color) {
    case 'blue':
      return 'This is blue';
    case 'red':
      return 'This is red';
    case 'green':
      return 'This is green';
    case 'orange':
      return 'This is orange';
    default:
      return 'color not found';
  }
  
 
}

export function esDiezOCinco(numero) {
  // Tu código:
  numero === 10 || numero === 5 ? true : false
}

export function estaEnRango(numero) {  
  // Tu código:
  numero > 20 && numero < 50 ? true : false
}

export function esEntero(numero) {
  // Tu código:
  numero%1 === 0 ? false : true
}

export function fizzBuzz(numero) {
  // Tu código:
  if(numero % 15 === 0) return 'fizzbuzz';
  if(numero % 3 === 0) return 'fizz';
  if(numero % 5 === 0) return 'buzz';
  return numero;

}

export function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  // Tu código:
  if(num1 < 0 || num2 < 0 || num3 < 0) {
    return "Hay negativos";
  }
  else if(num1 === 0 || num2 === 0 || num3 === 0) {
    return "Error";
  }
  else if(num1 > 0 && num1 > num2 && num1 > num3) {
    return "Número 1 es mayor y positivo";
  }
  else if(num3 > num1 && num3 > num2) {
    return num3 + 1;
  }
  else {
    return false;
  }
}

export function esPrimo(numero) {
  /// Tu código:

  if(numero < 2) return false;
  if(numero === 2) return true;
  for(let i = 2; i < numero; i++) {
    if(numero % i === 0) {
      return false;
    }
  }
  return true;
}

export function esVerdadero(valor){
  // Tu código:
  valor ? 'Soy verdadero' : 'Falso'
}

export function tablaDelSeis(){
  // Tu código:

  let arrayTablaDel6 = []
  for(let i = 0; i<11;i++){
    arrayTablaDel6.push(6*i)
  }
  return arrayTablaDel6
}

export function tieneTresDigitos(numero){
  // Tu código:
  numero > 99 && numero < 1000 ? true : false
}

export function doWhile(numero) {  
  //Usar el bucle do ... while.
  
  var a = numero
  var i = 0
  do{
    i += 1
    a += 5
  }while(i<8)
  return a;
}