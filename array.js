let numeros = [];
for (let i = 0; i < 3; i++) {
  const numero = parseInt(prompt(`Digite o ${i + 1}º numero:`));
  numeros.push(numero);
}
console.log("Numeros digitados:");

const numerosInvertidos = inverterArray(numeros);
