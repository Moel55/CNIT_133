// Create a webpage that contains a script that displays in pairs and strong (bold),
//  the letters xy and the numbers 12 and 89 on the same line, with each pair of characters
//   separated by one space. Write the script using document.write statements. Use a font 
//   family of Times New Roman and the color red for the letters xy, a font family of Arial 
//   and the color blue for the the numbers 12 and a font family of Impact, the color green,
//    and emphasized (in italics) for the numbers 89. 

document.innerHTML = displayPart1();

function displayPart1() {
    document.write("<span style='color:red; font-size: 60px; font-family: Times New Roman;'><strong>xy</strong></span>" + "&nbsp");
    document.write("<span style='color:blue; font-size: 50px; font-family: Arial;'><strong>12</strong></span>" + '&nbsp');
    document.write("<span style='color:green; font-size: 45px; font-family: Impact;'><strong><em>89</em></strong></span>" + '&nbsp');
}


