// Compruebo si el numero es valido, y ejecuto una funcion
// function isValidScore(nums, num, callback) {
//   if (num > 0 && num <= 10) {
//     callback();
//   }

//   if (nums != undefined) {
//     for (let i = 0; i < nums.length; i++) {
//       if (!(+nums[i] > 0) || !(+nums[i] <= 10)) {
//         return false;
//       }
//     }
//     return true;
//   }
// }

const jsConfetti = new JSConfetti();

/**Valida si el input es correcto, cambia su color dependiendo del resultado
  */
function validateScore(input){
  let score = parseFloat(input.value);

  if (score > 0 && score <= 10) {
    input.style.color = "green";
    return true;
  }
  input.style.color = "red"
  return false;
}

/**Calcular promedio de un array, inserta resultado en el div
  */
function calculateAverage() {
  // Valido si los inputs son validos
  if (!validateScoreInputs()) {
    return alert("Error. El valor debera ser un numero entre 1 y 10 inclusives.");
  }
  
  let numsElements = Array.from(form.querySelectorAll('input[type="number"]'));
  let nums = numsElements.map((numero) => numero.value);

  let total = 0;
  let promedio = 0;

  // Recorro el array y sumo sus numeros para conseguir el total
  nums.forEach((num) => {
    total += +num; // (+num) String => Number
  });
  promedio = total / nums.length; // Saco el promedio

  promedio = parseFloat(promedio);
  promedio = Number.isInteger(promedio) ? promedio : promedio.toFixed(2); // En caso de que no sea un numero entero muestro los dos digitos despues del punto decimal

  if (promedio >= 6) {
    resultado.style.color = "green";
    jsConfetti.addConfetti();
  } else {
    resultado.style.color = "red";
  }

  resultado.innerHTML = `El promedio es: ${promedio}`;
}

/**
  * Busca el numero mayor de los input, crea un array con las materias con notas mas altas y lo muestra
  */
function searchHighestScore() {
  let materiasMayorNota = [];

  if (!validateScoreInputs()) {
    return alert("Error. El valor debera ser un numero entre 1 y 10 inclusives.");
  }

  let highestScore = Math.max(parseFloat(inputMath.value), parseFloat(inputLengua.value), parseFloat(inputEfsi.value)); // En vez de recorrerlo con un for, utilizo max

  if (parseFloat(inputMath.value) === highestScore){
    inputMath.labels[0].style.color = "blue";
    materiasMayorNota.push("Matematica");
  }else{
  inputMath.labels[0].style.color = "white";}

  if (parseFloat(inputLengua.value) === highestScore){
    inputLengua.labels[0].style.color = "blue";
    materiasMayorNota.push("Lengua");
  }else{
    inputLengua.labels[0].style.color = "white";}

  if (parseFloat(inputEfsi.value) === highestScore){
    inputEfsi.labels[0].style.color = "blue";
    materiasMayorNota.push("Efsi");
  }else{
  inputEfsi.labels[0].style.color = "white";}

  resultado.innerHTML = `Nota más alta en: ${materiasMayorNota.join(", ")} con un ${highestScore}`;
  resultado.style.color = "white";
}

/**
  * Ver si los inputs ingresados son validos
  */
function validateScoreInputs(){
  let matematicaValidado = validateScore(inputMath);
  let lenguaValidado = validateScore(inputLengua);
  let efsiValidado = validateScore(inputEfsi);

  if (!matematicaValidado || !lenguaValidado || !efsiValidado) {
    return false;
  }
  return true;
}
