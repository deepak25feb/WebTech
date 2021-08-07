let global_display = document.querySelector(".calc.calc-diplay");
global_display.textContent = "0";



document.querySelector(".calc.calculator-layout").addEventListener(
    'click',
    function(event){
        switch (event.target.innerText) {
            case "1":
                // alert("1");
                global_display.textContent += '1';
                break;
            case "2":
                // alert("2");
                global_display.textContent += '2';
                break;
            case "3":
                // alert("3");
                global_display.textContent += '3';
                break;
            case "4":
                // alert("4");
                global_display.textContent += '4';
                break;
            case "5":
                // alert("5");
                global_display.textContent += '5';
                break;
            case "6":
                // alert("6");
                global_display.textContent += '6';
                break;
            case "7":
                // alert("7");
                global_display.textContent += '7';
                break;
            case "8":
                // alert("8");
                global_display.textContent += '8';
                break;
            case "9":
                // alert("9");
                global_display.textContent += '9';
                break;
            case "0":
                // alert("0");
                global_display.textContent += '0';
                break;
            case "C":
                // alert("C");
                global_display.textContent = '';
                break;
            case "←":
                // alert("←");
                global_display.textContent =  global_display.textContent.substring(0,(global_display.textContent.length-1) )
                break;
            case "÷":
                // alert("÷");
                global_display.textContent += '/';
                break;
            case "*":
                // alert("*");
                global_display.textContent += '*';
                break;
            case "-":
                // alert("-");
                global_display.textContent += '-';
                break;
            case "+":
                // alert("+");
                global_display.textContent += '+';
                break;
            case "=":
                // alert("=");
                global_display.textContent = eval(global_display.textContent);
                break;
            default:
                break;
        }
        
    }
);