// Para tipar uma função, tipamos os parâmetros dela para que tudo de certo

function greet(name: string) {
    console.log(`Olá, ${name}!`);
}

greet('Gustavo')

// Podemos tipar o retorno da função colocando os : e o tipo esperado entre os () e as {}

function doubleNumber(number:number): number {
    return number * 2;
}

const resultado = doubleNumber(3);
console.log(resultado);
