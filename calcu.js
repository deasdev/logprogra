function calculadora() {
const num1 = parseFloat(prompt("Digite o primeiro numero:"));
const operador = prompt("Digite o operador (+, -, *, /):");
const num2 = parseFloat(prompt("Digite o segundo numero:"));


let resultado;
switch (operador) {
  case '+':
    resultado = num1 + num2;
    break;
  case '-':
    resultado = num1 - num2;
    break;
  case '*':
    resultado = num1 * num2;
    break;
  case 
'/':
    if (num2 === 0) {
      resultado = "Divisão por zero não é permitida."
      ;
    } else {
      resultado = num1 / num2;
    }
    break;
  default:
    resultado = "Operador inválido.";
}

console.log("Resultado:", resultado);

}





