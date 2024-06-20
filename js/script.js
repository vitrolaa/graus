const Celsius = document.getElementById('op1').value;
const Fahrenheit = document.getElementById('op2').value;
const Kelvin = document.getElementById('op3').value;

function convert() {
    const de = document.getElementById("de").value;
    const para = document.getElementById("para").value;
    const valor = parseFloat(document.getElementById("valorCv").value);
    let resultado;

    if (de === 'op1' && para === 'op2') {
        resultado = (valor * 9 / 5) + 32;
    } else if (de === 'op2' && para === 'op1') {
        resultado = (valor - 32) * 5 / 9;
    } else if (de === 'op1' && para === 'op3') {
        resultado = valor + 273.15;
    } else if (de === 'op1' && para === 'op3') {
        resultado = valor + 273.15;
    } else if (de === 'op3' && para === 'op1') {
        resultado = valor - 273.15;
    } else if (de === 'op2' && para === 'op2') {
        resultado = (valor - 32) * 5 / 9 + 273.15;
    } else if (de === 'op3' && para === 'op2') {
        resultado = (valor - 273.15) * 9 / 5 + 32;
    } else {
        resultado = valor;
    }
    document.getElementById('mensagem').value = resultado
}