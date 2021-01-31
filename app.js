let buttons = ['Ac', 'MR', "M+", 'M-', 'MC', "+/-", '%', "(", ')', 'C', '7', '8', '9', '/', '←', '4', '5', '6', '*', "=", '1', '2', '3', '-', 'e', '0', '.', '+']

let btnArea = document.getElementById('buttonArea');
for (let i = 0; i < buttons.length; i++) {
    const btn = buttons[i];
    let button = document.createElement('div');
    button.innerHTML = btn;
    button.setAttribute('class', 'btn');
    button.setAttribute('data', btn);
    button.setAttribute('id', btn);
    btnArea.appendChild(button);
}
let display = '0';
let result = '0'
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
btnArea.addEventListener('click', function (event) {
    let value = event.target.id;
    if (buttons.indexOf(value) >= 0) {
        checkTap(value);
        if (display == '') {
            line1.innerText = '0';
        } else {
            line1.innerText = display;
        }
    }
})

function showResult() {
    let output = eval(display);
    line2.innerText = output;
    display = '0';
    result = '0';
}

function checkTap(value) {
    if (display == '0') {
        display = '';
        line2.innerText = '0'
    }
    switch (value) {
        case '0':
            display = '';
            line2.innerText = '0';
            break;
        case '=':
            showResult();
            break;
        case 'C':
            display = '0';
            result = '0';
        case '←':
            display = display.slice(0, -1);
            break;
        default:
            display += value;
    }
}