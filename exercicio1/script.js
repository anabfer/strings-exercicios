// Faça um programa que pergunte ao usuário seu nome e suas três comidas favoritas. Em seguida, imprima no console a seguinte mensagem:
//Estas são as comidas favoritas de nomeDoUsuario:
//- Comida1
//- Comida2
//- Comida3

const nomeDoUsuario = prompt("Qual o seu nome?")
const comida1 = prompt("Qual sua comida favorita?")
const comida2 = prompt("Qual sua segunda comida favorita?")
const comida3 = prompt("Qual sua terceira comida favorita?")

console.log(`Estas são as comidas favoritas de ${nomeDoUsuario}: \n- ${comida1} \n- ${comida2} \n- ${comida3}`)