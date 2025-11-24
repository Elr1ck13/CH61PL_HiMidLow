let num1 = document.getElementById("number1");
let num2 = document.getElementById("number2");
let num3 = document.getElementById("number3");
let showResult = document.getElementById("showResult");
let sendNumbers = document.getElementById("sendNumbers");




function sort(numbers){
    let result = "";
    let nums ="";
     let numSorted = numbers.sort(function(a, b) {
        return b - a; 
    });

    return `<p class="text-center"> <strong> ${numSorted.join(', ')}</strong></p>`

}

sendNumbers.addEventListener("click",function (event) {
    
    event.preventDefault();
    let arr = [num1.value,num2.value,num3.value]
    showResult.insertAdjacentHTML("beforeend",sort(arr))

}

);
