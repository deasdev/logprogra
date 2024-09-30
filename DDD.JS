function buscarDDD() {
    const cidade = {
        "Brasilia": "61",
        "Salvador": "71",
        "Sao Paulo": "11",
        "Vitoria": "27",
    };

    const nomeCidade = document.getElementById('cidade').value;
    const ddd = cidade[nomeCidade];

    const resultado = document.getElementById('resultado');

    if (ddd) {
        resultado.textContent = `O DDD de ${nomeCidade} é ${ddd}`;
    } else {
        resultado.textContent = "DDD não encontrado.";
    }
}