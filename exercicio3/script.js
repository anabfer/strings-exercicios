//Crie a const para a frase aqui
const frase = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"'

console.log(frase)

//Crie uma nova string a partir da primeira, trocando verde por rosa, e azul por laranja;

const novaFrase = frase.replaceAll("verde" , "rosa").replaceAll("azul" , "laranja")

// Verifique se a nova string incui verde, se se inclui laranja.

console.log(novaFrase)

//tente fazer o trecho “mas não deixe o gato sair” ficar em letras maiúsculas, assim como o “BOAS VINDAS”
 
const fraseCasa = "Jorge tem uma casa verde e com portão azul, com os dizeres: "
const boasVindas= "BOAS VINDAS, mas não deixe o gato sair"
const boasVindasMaiusculo = boasVindas.toUpperCase()

console.log(fraseCasa + boasVindasMaiusculo)

