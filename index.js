
let stringMain = "";

function deleteAC(){

  document.getElementById("result").innerHTML = '';
    stringMain ="";
    console.log(stringMain);
}


function createString(stringCalcul){
    stringMain = stringMain+stringCalcul.id;
    document.getElementById("result").innerHTML = stringMain;
    console.log(stringMain);
}

function answerCalculation(operationString){
    const operationsList = ["+", "-", "*", "/"]
    const numbers = operationString.split(/[+\-*/]/)
    const operations = operationString.split("").filter(char => operationsList.includes(char))
  
    let cumul = Number(numbers[0]);
  
    for (let i = 1; i < numbers.length; i++) {
      if(operations[i-1] === "+"){
        cumul += Number(numbers[i])
      } else if (operations[i-1] === "-"){
        cumul -= Number(numbers[i])
      } else if (operations[i-1] === "*"){
        cumul *= Number(numbers[i])
      } else if (operations[i-1] === "/"){
        cumul /= Number(numbers[i])
      } 
    }

    console.log(cumul);
    document.getElementById("result").innerHTML = cumul;
    stringMain = cumul;
    return cumul
  }