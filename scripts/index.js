let selectParcelas = document.getElementById('parcelas');
for (let i = 1; i <= 12; i++) {
    let option = document.createElement('option');
    option.value = i;
    option.textContent = i + 'x';
    selectParcelas.appendChild(option);
}

function calcularParcelas() {
    let valor = parseFloat(document.getElementById('valor').value);
    let parcelas = parseInt(document.getElementById('parcelas').value);

    let valorParcela = (valor / parcelas).toFixed(2);
    document.getElementById('resultado').textContent = `Valor de cada parcela em ${parcelas}x: R$ ${valorParcela}`;
}