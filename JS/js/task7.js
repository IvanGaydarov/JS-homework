/**
 * Напише JavaScript функционалност, която конвертира от kg в lb и
обратно.
1kg = 2.20462262 lb
 */
function calcWeight () {
    var from = document.querySelector('#from').value,
        to = document.querySelector('#to').value,
        value = document.querySelector('#weight').value,
        proportion = 2.20462262,
        result;
    if (from == to) {
        document.getElementById('calcWeight').innerHTML =
            '<p> Select option to covert </p>'
    } else if (from > to) {
        result = value/proportion;
        document.getElementById('calcWeight').innerHTML =
            value + ' ' + document.querySelector('#to').textContent[2]
            + document.querySelector('#to').textContent[3] + ' = ' + result + ' '
            + document.querySelector('#to').textContent[0]
            + document.querySelector('#to').textContent[1]
    } else {
        result = value * proportion;
        document.getElementById('calcWeight').innerHTML =
            value + ' ' + document.querySelector('#to').textContent[0]
            + document.querySelector('#to').textContent[1] + ' = '  + result + ' '
            + document.querySelector('#to').textContent[2]
            + document.querySelector('#to').textContent[3]
    }
}