let n1, n2, n3, num1, num2, num3;

function numberType() {
    n1 = document.getElementById('num-one').value;
    n2 = document.getElementById('num-two').value;
    n3 = document.getElementById('num-three').value;

    num1 = parseInt(n1);
    num2 = parseInt(n2);
    num3 = parseInt(n3);

    typeof(num1 === 'number') ||
    typeof(num2 === 'number') ||
    typeof(num3 === 'number') 
    ? threeNumbers()
    : document.getElementById('result').value = 
    "Please enter a number.";
    
}

function threeNumbers() {
    let sum = num1 + num2 + num3;
    let myAverage = sum / 3;
    let average = myAverage.toFixed(2);
    let product = num1 * num2 * num3;

    if(isValidNumber(sum) && isValidNumber(average) && isValidNumber(product)) {
        document.getElementById('result').value = 
        ("The sum is " + sum + "\nThe average is " + average + "\nThe product is " + product);
    }
    else {
        document.getElementById('result').value = "The first number is " + (isValidNumber(num1) ? "valid" : "invalid") 
        + "\nThe second number is " + (isValidNumber(num2) ? "valid" : "invalid") 
        + "\nThe third number is " + (isValidNumber(num3) ? "valid" : "invalid")
    }
  document.getElementById('result').classList.add('fade');
  setTimeout(() => { document.getElementById('result').classList.remove('fade');  
  document.getElementById('result').value = '';}, 5000) 
}

function isValidNumber(number) {
    return number || number === 0;
}