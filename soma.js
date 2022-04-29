var input01 = document.getElementById('txtn1');
var input02 = document.getElementById('txtn2');
var button = document.getElementById('btn');
var msg = document.getElementsByClassName('resultado')[0];
function somar(a, b) {
    return a + b;
}
button.addEventListener("click", function () {
    console.log(somar(Number(input01.value), Number(input02.value)));
});
