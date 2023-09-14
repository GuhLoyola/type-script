// Um tipo tuple (tupla em pt-BR) é outro tipo de array com a diferença de que ele sabe exatamente quantos elementos esse array contêm e exatamente quais tipos de dados ele contêm em posições específicas.

// OBS: Nas tuplas a ordem dos elementos IMPORTA

const tupla: [string, number] = ['Gustavo', 20];

// Exemplo de tupla na vida real: useState()

// A partir do TS 3.0 é possivel ter elementos opcionais nas tuplas

const RGBA: [number, number, number, number?] = [255, 0, 0] // O '?' ao lado do último number o torna opcional para a tupla

// A tupla é ideal para coleções com tamanhos e tipos específicos