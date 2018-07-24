var select = []
var total = 0
var temp = ''

//event listener for when a button on the calculator is clicked
  
function input() {
    var digitValue = document.getElementById("buttonId").getAttribute("value");
    if (!isNaN(digitValue)) {
        temp += digitValue;
        console.log(temp);
        //document.getElementById("answer").innerHTML = "1-3";
        document.getElementById("answer").value = temp;
    }
     else if (digitValue === "+") {
        select.push(temp);
        select.push("+");
        console.log(temp);
        temp = '';
        document.getElementById("answer").value = "+";
    }
    
}


