const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

console.log(" Quantidade de caracteres:" , minhaString.length)
//Remova o excesso de espaços no final da string
const removerEspaco = minhaString.trim()

// Imprima no console a quantidade de caracteres da string, antes e depois da remoção dos espaços
console.log("Quantidade de caracteres depois de remover os espaços:" , removerEspaco.length)

// Substitua os traços _________ por "sticioso"

const substituirEspaco = removerEspaco.replaceAll("________", "sticioso")
console.log(substituirEspaco)