var form = document.getElementById("Form");
let notaMatematica = document.getElementById('inputMatematica');
let notaLengua = document.getElementById('inputLengua');
let notaEfsi = document.getElementById('inputEfsi');
let resultado = document.getElementById('Resultado');
let btnPromedio = document.getElementById('Promedio');



notaLengua.onkeydown = (e) => {
    console.log(e.target.value);
    resultado.innerHTML = e.target.value;
}

notaMatematica.onkeydown = (e) => {
    console.log(e.target.value);
}

notaEfsi.onkeydown = function(e){
    console.log(e.target.value);
}



function isValidScore(num, callback){
    if(num > 0 && num <= 10){
        callback();
    }

}



