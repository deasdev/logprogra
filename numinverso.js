
 function inverterArray(array) {
  return array.reverse();
}

let numeros = [];
for (let i = 0; i < 3; i++) {
  let numero = parseInt(prompt("Digite o " + (i+1) + "º número:"));
  while (isNaN(numero)) {
    numero = parseInt(prompt("Por favor, ingrese un número válido:"));
  }
  numeros.push(numero);
}


console.log("Array original:", numeros);

let numerosInvertidos = inverterArray(numeros);

let resultado = document.getElementById('resultado');
if (resultado) {
  resultado.textContent = ` array invertido e: ${numerosInvertidos.join(', ')}`;
} else {
  console.error(" elemento com o ID 'resultado' nao encontrado.");
}