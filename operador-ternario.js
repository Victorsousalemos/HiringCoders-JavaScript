// if...else

// if(idade >= 18) {
//    return 'Maior de idade'
// } else {
//    return 'Menor de idade'
// }

// usando o operador ternario resume o if...else e fica assim:

// idade >= 18 ? 'Maior de idade': 'Menor de idade'

function calculaIdade(idade) {
  return idade >= 18 ? 'Maior de idade' : 'Menor de idade'
}

console.log(calculaIdade(19))
