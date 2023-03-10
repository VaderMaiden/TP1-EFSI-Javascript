const form = document.getElementById("Form");
let inputMath = document.getElementById('inputMatematica');
let inputLanguage = document.getElementById('inputLengua');
let inputEfsi = document.getElementById('inputEfsi');
let resultado = document.getElementById('Resultado');


// Para los 3 inputs, cambio el color segun el valor
inputMath.onkeyup = (e) => {
    e.target.style.color = "red";

    isValidScore(e.target.value, () => {
      e.target.style.color = "green";
    });
}

inputLanguage.onkeyup = (e) => {
    e.target.style.color = "red";
    
    isValidScore(e.target.value, () => {
        e.target.style.color = "green"
    });
}

inputEfsi.onkeyup = (e) => {
    e.target.style.color = "red";

    isValidScore(e.target.value, () => {
      e.target.style.color = "green";
    });
}

form.addEventListener('submit', (e) => {

    e.preventDefault();

    let nums = Array.from(form.querySelectorAll('input[type="number"]'));
    nums = nums.map(numero => numero.value);

    if(e.submitter == document.getElementById("Promedio")){

        if(isValidScore(nums) == false){
            alert("Error. El valor debera ser entre 1 y 10 inclusives.");
        }

        resultado.innerHTML = calculateAverage(nums);
    };

    if(e.submitter == document.getElementById("MayorNota")){ 

        resultado.innerHTML = searchHighestScore(nums);

    };
})


// Compruebo si el numero es valido, y ejecuto una funcion
function isValidScore(nums, num, callback){
    
    if (num > 0 && num <= 10) {
      callback();
    }
    
    if(nums != undefined){
        for (let i = 0; i < nums.length; i++) {
          if (!(+nums[i] > 0) || !(+nums[i] <= 10)) {
            console.log(false);
            return false;
          }
        }
        console.log(true);
        return true;
    }
}

function calculateAverage(nums){
    let suma = 0;
    let promedio = 0;
    // Recorro el array y sumo sus numeros
    nums.forEach(num => {
        suma += +num; // (+num) String => Number
    });
    promedio = (suma / nums.length); // Saco el promedio
    promedio = Number.isInteger(promedio) ? promedio : promedio.toFixed(2); // En caso de que no sea un numero entero mustro los dos digitos despues del punto decimal
    return promedio;
}

function searchHighestScore(nums){
    let highest = 0;

    nums.forEach(num => {
        if(highest > +num){
            return;
        }
        highest = +num;
    });

    return highest;
}
