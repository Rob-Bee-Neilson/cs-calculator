var select = []
var total = 0
var temp = ''

//event listener for when a button on the calculator is clicked
  
function input(digitValue) {
    if (!isNaN(digitValue)) {     
        temp += digitValue;
        console.log(temp);
        document.getElementById("answer").value = temp;
    }
    else if (digitValue === ".") {   
        temp += digitValue;
        console.log(temp);
        document.getElementById("answer").value = temp;
    }    
    else if (digitValue === "+") {
        select.push(temp);
        select.push("+");
        console.log(select);
        temp = '';
        document.getElementById("answer").value = "+";
    }
    else if (digitValue === "-") {
        select.push(temp);
        select.push("-");
        console.log(select);
        temp = '';
        document.getElementById("answer").value = "-";
    }
    else if (digitValue === "/") {
        select.push(temp);
        select.push("/");
        console.log(select);
        temp = '';
        document.getElementById("answer").value = "/";
    }
    else if (digitValue === "x") {
        select.push(temp);
        select.push("*");
        console.log(select);
        temp = '';
        document.getElementById("answer").value = "x";
    }
    else if (digitValue === "%") {
        //select.push(temp);
        //select.push("");
        console.log(select);
        //temp = '';
        document.getElementById("answer").value = "No Clue";
    }
    else if (digitValue === "AC") {
        temp = '';
        select = [];
        total = 0
        document.getElementById("answer").value = total;
    }   
    else if (digitValue === "CE") {
        temp = '';
        document.getElementById("answer").value = total;
    } 
    else if (digitValue === "=") {
        select.push(temp);
        var calc = Number(select[0]);
        for (var i = 0; i < select.length; i++) {
            var nextNum = Number(select[i+1]);
            var operator = select[i];

            if (operator === '+') {
                calc += nextNum;
            console.log(select);
            }

        }    






        document.getElementById("answer").value = calc;
    }  








}


