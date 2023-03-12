const form = document.getElementById("Form");
var inputMath = document.getElementById('inputMatematica');
var inputLengua = document.getElementById('inputLengua');
var inputEfsi = document.getElementById('inputEfsi');
var resultado = document.getElementById('Resultado');

// Para los 3 inputs, cambio el color segun el valor
inputMath.onkeyup = (e) => {
  validateScore(e.target);
}

inputLengua.onkeyup = (e) => {
  validateScore(e.target);
}

inputEfsi.onkeyup = (e) => {
  validateScore(e.target);
}

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     let numsElements = Array.from(form.querySelectorAll('input[type="number"]'));
//     nums = numsElements.map(numero => numero.value);
//     console.log(numsElements);
//     console.log(nums);
    
//     if ( e.submitter == document.getElementById("Promedio") && isValidScore(nums) != false) {
//         return resultado.innerHTML = `El promedio es: ${calculateAverage(nums)}`;
//     };
    
//     if(e.submitter == document.getElementById("MayorNota") && isValidScore(nums) != false){
//         return resultado.innerHTML = searchHighestScore(nums);
//     };
//     alert("Error. El valor debera ser entre 1 y 10 inclusives.");
// })

