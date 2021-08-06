// Crie uma função que verifica se uma string é palíndroma!
// A função deve receber 1 parametro, uma string, e retornar um valor boolean que diz se a string é palindroma (se ela é escrita do mesmo jeito de trás para frente).

// Exemplos:
// isPalindrome("arara") -> true
// isPalindrome("douglas") -> false
// isPalindrome("reviver") -> true

str1 = 'goingtosenior';
str2 = 'roinesotgniog';

function isPalindrome(str1, str2) {
  return (str1 == str2.split("").reverse().join("")) ? true : false;
}

console.log(isPalindrome(str1, str2));
