const alunasGama = ['Paula', 'Maria', 'Estela', 'Clara']

//acessar informações numa array
console.log(alunasGama[3])

//operador spread (...)
const alunasXp = [...alunasGama, 'Simaria']
console.log(alunasXp)

//metodos de iteração

//map
alunasXp.map(aluna => console.log(aluna))

//filter
const numeros = [34, 45, 67, 90, 55, 76]

const numerosImpares = numeros.filter(numero => numero % 2 != 0)
console.log(numerosImpares)

const numerosPares = numeros.filter(numero => numero % 2 == 0)
console.log(numerosPares)

// sort - ordenação

const numerosOrdenadosCrescentes = numeros.sort()
console.log(numerosOrdenadosCrescentes)

const numerosOrdenadosDecrescente = numeros.sort((a, b) => b - a)
console.log(numerosOrdenadosDecrescente)

//reduce - reduz nosso array a um resultado de uma operação matemática

const numbers = [1, 34, 35]

const soma = numbers.reduce((valorAnterior, valorAtual) => {
  return valorAnterior + valorAtual
})

console.log(soma) //70
