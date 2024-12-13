
const result = document.getElementById('result');


function appendValue(value) {
    result.value += value;
}


function clearDisplay() {
    result.value = '';
}


function deleteLast() {
    result.value = result.value.slice(0, -1);
}


function calculate() {
    try {
        result.value = eval(result.value.replace('x', '*'));
    } catch (error) {
        alert('Invalid Expression');
        result.value = '';
    }
}
