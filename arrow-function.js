// Arrow Function é uma forma menos verbosa de declarar function

// function - como era

function soma(a, b) {
  return a + b
}

console.log(soma(3, 5)) //8

// arrow-function agora

// const soma = (num1, num2) => num1 + num2

const sayHello = name => `Hello ${name}`

console.log(sayHello('Victor'))
