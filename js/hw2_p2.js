let n1, n2, n3, num1, num2, num3;

// function input() {
    
//     // ((typeof n1 || n2 || n3 !== 'number') || (n1 || m2 || n3 === ''))? 
//     // document.getElementById('result').value = "Your input is not a number.":
   
// }

function threeNumbers() {
    n1 = document.getElementById('num-one').value;
    n2 = document.getElementById('num-two').value;
    n3 = document.getElementById('num-three').value;

    num1 = parseInt(n1);
    num2 = parseInt(n2);
    num3 = parseInt(n3);

    console.log(num1, num2, num3)
    let sum = num1 + num2 + num3;
    let average = sum / 3;
    let product = num1 * num2 * num3;
   
    document.getElementById('result').value = ("The sum is " + sum + "\nThe average is " + average + "\nThe product is " + product);
}