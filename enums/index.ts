/* 

O enum é um dos tipos do TypeScript que nos permite declarar um conjunto de valores/constantes pré-definidos.

Nesse arquivo temos dois tipos de Enum: Numérico e Strings
*/

// Enum numérico -> armazenam strings com valores numéricos

enum Colors {
    Red, // Se nenhum valor for atribuido ele começa com o valor 0 e as propriedades seguintes são auto increment
    Blue, // 1
    Green // 2
}

/* Nesse tipo de enum nós não declaramos os seus valores pois eles são auto increment porém isso não impede que passemos um valor 
para as propriedades
*/

enum Cores {
    Azul = 15, // Como o 1° valor é 15 o incremento será a partir dele
    Verde, // 16
    Amarelo // 17
}

// Também podemos passar valores aleatórios

enum RequestChange {
    Good = 200,
    Bad = 400,
    NotFound = 404
}

/* Enum String -> São similares aos numéricos com a diferença de que nesse caso precisamos inicializar as propriedades com uma String
enquanto os numéricos são auto increment */

enum Dias {
    Segunda = 'Segunda-feira',
    Terça = 'Terça-feira',
    Quarta = 'Quarta-feira',
    Quinta = 'Quinta-feira',
    Sexta = 'Sexta-feira',
    Sabado = 'Sábado',
    Domingo = 'Domingo'
}

// Para percorrer um Enum podemos utilizar o FOR

for (let key in Dias) {
    console.log(key)
}

// Para buscar um valor no Enum existem algumas formas, alguns exemplos abaixo:

const Segunda = Dias.Segunda; // Segunda-feira
const indexSegunda = Dias['Segunda']; // Segunda-feira
const nomePropriedade = RequestChange[404]; // NotFound