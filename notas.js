function calcularMedia() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value); 

    const media = (nota1 + nota2 + nota3) / 3;

    const resultadoElement = document.getElementById('resultado');
    if (media >= 7) {
        resultadoElement.textContent = "Aprovado!";
    } else {
        resultadoElement.textContent = "Reprovado!";
    }
}