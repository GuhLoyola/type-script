/*
    O ANY é um tipo especial do TS que podemos usar quando não queremos que um valor específico cause erros de verificação de tipo ou
    quando não temos certeza do tipo.
*/

let moviesCount:any = 10; // -> Basicamente é como se fosse um 'coringa'.

/* 
    Porém apesar de 'prático', devemos evitar ao maximo o uso do any em nossos códigos pois como ele 'desabilita' o tipo da variável
    consequentemente deixa nosso código mais propenso a bugs e erros.
*/

moviesCount = '10';  // Em teoría essa variável deveria ser um number 😥