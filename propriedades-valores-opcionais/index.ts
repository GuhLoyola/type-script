type Customer = {
    firstName: string;
    lastName?: string;
    age: number;
}

const newCustomer: Customer = {
    firstName: 'Gustavo',
    lastName: 'Loyola',
    age: 20
}

console.log(newCustomer)

function printName( firstName: string, lastName?: string){
    console.log(`O primeiro nome é ${firstName}`);
    console.log(`O sobrenome é ${lastName}`);
}

printName('Gustavo');
printName('Gustavo', 'Loyola')