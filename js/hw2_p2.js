
let results = document.getElementById('result').value;


function threeNumbers() {
    let n1 = document.getElementById('num-one').value;
    console.log(n1)
    let n2 = document.getElementById('num-two').value;
    let n3 = document.getElementById('num-three').value;
    let num1 = parseInt(n1);
    let num2 = parseInt(n2);
    let num3 = parseInt(n3);
    let sum = num1 + num2 + num3;
    let average = sum / 3;
    let product = num1 * num2 * num3;
    results = "The sum is" + sum;
}