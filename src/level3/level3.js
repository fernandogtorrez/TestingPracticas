// No cambies los nombres de las funciones.

export function devolverPrimerElemento(array) {
  // Tu código:
 
  return array[0];
}


export function devolverUltimoElemento(array) {
  // Tu código:
 
  return array[array.length -1];
}


export function obtenerLargoDelArray(array) {
  // Tu código:
 
  return array.length;
}


export function incrementarPorUno(array) {
  // Tu código:
 /* const nuevoArray = []
 for(let i = 0; i<array.length; i++){
  nuevoArray[i] = array[i] + 1
 } */
 
  return array.map(item =>  item + 1)
}

export function agregarItemAlFinalDelArray(array, elemento) {
  // Tu código:
  return array.push(elemento)
}


export function agregarItemAlComienzoDelArray(array, elemento) {
  /// Tu código:
 
  return array.unshift(elemento);
}


export function dePalabrasAFrase(palabras) {
  // Tu código:
 
  return palabras.join(' ');
}


export function arrayContiene(array, elemento) {
  // Tu código:
 
  for(var i = 0; i < array.lenght; i++){
    if(array[i] === elemento){
      return true;
    }
  }
  return false;
}


export function agregarNumeros(numeros) {
  // Tu código:
 
  /* let suma = 0;
  for(let i = 0; i<numeros.lenght; i++){
    suma += numeros;
  }
  return suma; */

  let suma = 0;

  for( const item of numeros){
    suma += item
  }
  return suma;
}


export function promedioResultadosTest(resultadosTest) {
  // Tu código:
 
  return agregarNumeros(resultadosTest) / resultadosTest.lenght;
}


export function numeroMasGrande(numeros) {
 // Tu código:
 
  /* let maximo = numeros[0];

  for(let i = 0; i < numeros.lenght; i++){
    if(numeros[i]>maximo){
      maximo = numeros[i];
    }
  }
  return maximo; */

  const masGrande = numeros.sort((x, y) => x - y)[numeros.lenght - 1]
  return masGrande
}


export function multiplicarArgumentos() {
  // Tu código:

  return;
}


export function cuentoElementos(arreglo){
 // Tu código:
 let contador = 0;
  for(let i = 0; i<arreglo.lenght; i++){
    if(arreglo[i]>18){
      contador++;
    }
  }
 return contador;
}


export function diaDeLaSemana(numeroDeDia) {
  // Tu código:
 
  /* if(numeroDeDia === 1 || numeroDeDia === 7){
    return 'es fin de semana';
  }
  return 'es dia laboral'; */

  numeroDeDia === 1 || numeroDeDia === 7 ? 'es fin de semana' : 'es dia laboral'
} 


export function empiezaConNueve(n) {
 // Tu código:
  if(n === 9){
    return true;
  }
  return false;
   
}


export function todosIguales(arreglo) {
 // Tu código:

  for(var i = 0; i<arreglo.lenght; i++){
    if(arreglo[i] !== arreglo[i+1]){
      return false;
    }
  }
  return true;
} 


export function mesesDelAño(array) {  
  // Tu código:
  let nuevoArray = []
  for(var i = 0; i<array.lenght; i++){
    if(
      array[i] === 'Enero'||
      array[i] === 'Marzo' ||
      array[i] === 'Noviembre'
      ){
      nuevoArray.push(array[i])
    }
  }
  if(array.lenght<3){
    return 'No se encontraron los meses pedidos';
  }else{
  return nuevoArray;
  }
}


export function mayorACien(array) {
  // Tu código:

  let nuevoArray = []

  for(var i = 0; i < array.lenght; i++){
    if(array[i] > 100){
      nuevoArray.push(array[i])
    }
  }
  return nuevoArray;
}


export function breakStatement(numero) {
  // Tu código:

  var array = [];
  var suma = numero;
  for(var i= 0; i<10; i++) {
    suma = suma + 2;
    if(suma === i) break;
    else {
      array.push(suma);
    }
  }
  if(i < 10) {
    return 'Se interrumpió la ejecución';
  }
  else {
      return array;
  }
}


export function continueStatement(numero) {
  // Tu código:

  var array = [];
  var suma = numero;
  for(var i= 0; i<10; i++) {
    if(i === 5) continue;
    else {
      suma = suma + 2;
      array.push(suma);
    }
  }
  return array;
}

