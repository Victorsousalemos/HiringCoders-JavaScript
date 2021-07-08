const pessoa = {
  nome: 'Victor',
  idade: 25,
  cidade: 'Carapicuiba'
}

//Notação de ponto
console.log(pessoa.nome) //Victor

//Notação de colchetes
console.log(pessoa['idade']) //25

//Como desestruturar Objetos

const { nome, idade, cidade } = pessoa

console.log(nome)
console.log(idade)
console.log(cidade)
