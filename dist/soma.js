"use strict";
const input01 = document.getElementById('txtn1');
const input02 = document.getElementById('txtn2');
const button = document.getElementById('btn');
const msg = document.getElementsByClassName('resultado')[0];
function somar(a, b) {
    return a + b;
}
button.addEventListener("click", function () {
    console.log(somar(Number(input01.value), Number(input02.value)));
});
