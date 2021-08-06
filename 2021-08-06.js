// Crie uma função que verifica se duas strings são anagramas uma da outra!
// A função deve receber 2 parametros, ambos strings, e retornar um valor boolean que diz se as strings são anagramas uma da outra.

// Exemplos:
// areAnagrams("banana", "nabana") -> true
// areAnagrams("truck", "douglas") -> false
// areAnagrams("luz", "zul") -> true

str1 = 'goingtosenior';
str2 = 'roinesotgniog';

function areAnagrams(str1, str2) {
  return (str1 == str2.split("").reverse().join("")) ? true : false;
}

console.log(areAnagrams(str1, str2));
