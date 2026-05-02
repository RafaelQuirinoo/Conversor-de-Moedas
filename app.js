const campoValor = document.getElementById("valor");
const campoMoeda = document.getElementById("moeda");
const campoSaida = document.getElementById("saida");

const TAXA_DOLAR = 5.00;
const TAXA_EURO = 5.40;

function converter() {
    let valor = parseFloat(campoValor.value);
    let moeda = campoMoeda.value;
    let resultado = 0;

    if (!valor) {
        campoSaida.innerText = "0.00";
        return;
    }

    if (moeda === "usd_brl") resultado = valor * TAXA_DOLAR;
    if (moeda === "brl_usd") resultado = valor / TAXA_DOLAR;
    if (moeda === "eur_brl") resultado = valor * TAXA_EURO;
    if (moeda === "brl_eur") resultado = valor / TAXA_EURO;

    campoSaida.innerText = resultado.toFixed(2);
}

campoValor.addEventListener("input", converter);
campoMoeda.addEventListener("change", converter);