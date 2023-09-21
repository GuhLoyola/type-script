// O generic é um conceito que serve para otimizar o nosso código tornando ele menos redundante e com mais qualidade.

function fazerArray(num: number):number[]{
    return[num]
}

// O código acima faz uma array de numeros porem e se quisermos fazer uma de strings?......Fazer outra função deixaria o código redundante, então é ai que entra o generic

// Função genérica que aceita um argumento do tipo T e retorna um array de valores do mesmo tipo T: 👇🏻

function makeArray<T>(item: T): T[] {
    return[item]
}

// Agora ao invés de receber e retornar apenas tipos numbers, a função pode receber outros tipos (ai não precisamos criar um monte de funções iguais) deixando o código mais limpo, mais facil de entender e mais facil de se dar manutenção

const numbers = makeArray(10);
console.log(numbers);