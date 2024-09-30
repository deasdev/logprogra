function contagemRegressiva() {
    const numero = parseInt(prompt("Digite um número inteiro positivo menor ou igual a 10:"));
  
    if (isNaN(numero) || numero <= 0 || numero > 10) {
      alert("Por favor, digite um número inteiro positivo válido entre 1 e 10.");
    } else {
      for (let i = 10; i >= numero; i--) {
        console.log(i);
      }
    }
  }
  
  contagemRegressiva();
  if (!isNaN(numero) && numero > 0 && numero <= 10) {
    const resultado = document.getElementById('resultado');
    for (let i = 10; i >= numero; i--) {
      resultado.textContent += i + " ";
    }
  }

