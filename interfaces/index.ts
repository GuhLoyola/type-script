// A interface é uma outra forma de tipar um objeto sendo q a diferença entre o type e a interface é que a interface possui o conceito de herança, onde as interfaces podem ser estendidas para outras (é muito bom quando precisamos criar um novo objeto com propriedades especificas).

type Tcustomer = {
    name: string;
    age: number;
}

// Sintaxe da interface:

interface ICustomer {
    name: string;
    age: number;
}


// A palavra chave EXTENDS determina uma herança

interface IProfile extends ICustomer {
    // IProfile vai possuir todas as propriedades de ICustomer e ainda tem a liberdade de ter as proprias props
    address: string;
}