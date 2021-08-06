// Crie uma função que verifica se uma string é palíndroma!
// A função deve receber 1 parametro, uma string, e retornar um valor boolean que diz se a string é palindroma (se ela é escrita do mesmo jeito de trás para frente).

// Exemplos:
// isPalindrome("arara") -> true
// isPalindrome("douglas") -> false
// isPalindrome("reviver") -> true

str = 'goingtosenior';

function isPalindrome(str) {
  
  reverse = str.split("").reverse().join("");
  
  return (str1 == reverse)
    ? true
    : false
  ;
  
}

console.log(isPalindrome(str1));
