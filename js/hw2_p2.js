let n1, n2, n3, num1, num2, num3;

function numberType() {
    n1 = document.getElementById('num-one').value;
    n2 = document.getElementById('num-two').value;
    n3 = document.getElementById('num-three').value;

    num1 = parseInt(n1);
    num2 = parseInt(n2);
    num3 = parseInt(n3);

    let myNum = [num1, num1, num1];

    myNum.forEach(nums => {
        (typeof nums === "number")
        ? threeNumbers()
        : document.getElementById('result').value = 
        nums + " is not a number, Please enter a number.";
    })
    
}

function threeNumbers() {
    let sum = num1 + num2 + num3;
    let myAverage = sum / 3;
    let average = myAverage.toFixed(2);
    let product = num1 * num2 * num3;
   
    document.getElementById('result').value = 
    ("The sum is " + sum + "\nThe average is " + average + "\nThe product is " + product);
}