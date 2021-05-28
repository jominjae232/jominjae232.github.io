function forclear() {
    document.getElementById("output").innerHTML = "0";
}
function removeZero() {
    var value = document.getElementById("output").innerHTML;
    if (value == "0") {
        value = ""
        document.getElementById("output").innerHTML = value;
    }
}
function perc() {
    var value = document.getElementById("output").innerHTML;
    value = value / 100;
    document.getElementById("output").innerHTML = value;
}
function fordisplay(value) {
    removeZero()
    document.getElementById("output").innerHTML += value;
    // +=연산자: 우측의 연산자의 값을 변수에 더하는 연산자
}
function solve() {
    removeZero()
    var equation = document.getElementById("output").innerHTML;
    var solved = eval(equation);
    document.getElementById("output").innerHTML = solved;
}