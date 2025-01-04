function addition(){
    a = parseInt(document.getElementById("num1").value);
    b = parseInt(document.getElementById("num2").value);
    c = a + b;
    document.getElementById("result").innerText = c;
}

function substraction(){
    a = parseInt(document.getElementById("num1").value);
    b = parseInt(document.getElementById("num2").value);
    c = a - b;
    document.getElementById("result").innerText = c;
}

function multiplication(){
    a = parseInt(document.getElementById("num1").value);
    b = parseInt(document.getElementById("num2").value);
    c = a * b;
    document.getElementById("result").innerText = c;
}

function division(){
    a = parseFloat(document.getElementById("num1").value);
    b = parseFloat(document.getElementById("num2").value);
    c = a / b;
    document.getElementById("result").innerText = c;
}

function modulo(){
    a = parseFloat(document.getElementById("num1").value);
    b = parseFloat(document.getElementById("num2").value);
    c = a % b;
    document.getElementById("result").innerText = c;
}