// O union type é como se fosse um 'OU' no TS na hora de definirmos um tipo de uma variável

function printClientId(id:number | string){
    console.log(`O id do cliente é ${id}`);
}

printClientId(100);
printClientId('g_loyola');