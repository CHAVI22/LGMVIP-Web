let scr = document.getElementById('calscreen');
buttons = document.querySelectorAll('button');
let calValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            calValue += buttonText;
            scr.value = calValue;
        }
        else if (buttonText == 'C') {
            calValue = "";
            scr.value = calValue;
        }
        else if (buttonText == '=') {
            scr.value = eval(calValue);
        }
        else {
            calValue += buttonText;
            scr.value = calValue;
        }

    })
}
