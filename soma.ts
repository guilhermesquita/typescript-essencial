const input01 = document.getElementById('txtn1') as HTMLInputElement;
const input02 = document.getElementById('txtn2') as HTMLInputElement;
const button = document.getElementById('btn')! as HTMLButtonElement;
const msg = document.getElementsByClassName('resultado')[0] as HTMLDivElement;

function somar (a: number,b:number){
    return a + b;
}

button.addEventListener("click" , function(){
    console.log(somar(Number(input01.value), Number(input02.value)))
});