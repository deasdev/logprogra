function calcularMulta() {

  const velocidadePermitida = parseInt(document.getElementById('velocidadePermitida').value);
  const velocidadeCondutor = parseInt(document.getElementById('velocidadeCondutor').value);


  const excesso = ((velocidadeCondutor - velocidadePermitida) / velocidadePermitida) * 100;


  let resultado;
  if (velocidadeCondutor <= velocidadePermitida) {
      resultado = "Sem multa";
  } else if (excesso <= 20) {
      resultado = "Multa leve";
  } else {
      resultado = "Multa grave";
  }


  document.getElementById('resultado').textContent = resultado;
}
