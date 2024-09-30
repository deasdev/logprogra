let numeros = [ 5,8,9];

function adicionarNumero() {
  const novoNumero = parseInt(prompt("Digite um numero:"));
   
  if (numeros.includes(novoNumero)) {
    alert("O numero ja existe na lista!");
  
  } else {
    numeros.push(novoNumero);
    alert("Numero adicionado com sucesso! A lista atual e: " + numeros.join(", "));
   
}
  
}