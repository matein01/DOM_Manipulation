//Se inicializa la variable h1 con el query h1 que hace referencia a la etiqueta
const h1 = document.querySelector("h1");

//Se inicializa la variable form con el query #form que hace referencia a la clase
const form = document.querySelector("#form");

//Se inicializa la variable input1 con el query #calculo1 que hace referencia a la clase
const input1 = document.querySelector("#calculo1");

//Se inicializa la variable input2 con el query #calculo2 que hace referencia a la clase
const input2 = document.querySelector("#calculo2");

//Se inicializa la variable btn con el query #btnCalcular que hace referencia a la clase
const btn = document.querySelector("#btnCalcular");

//Se inicializa la variable pResult con el query #result que hace referencia a la clase
const pResult = document.querySelector("#result");

//Se ordena mandar llamar a la funcion sumar cuando el form sea clqueado
form.addEventListener("click", sumar);

//Se crea la funcion sumar que suma input1 e input2 reciviendo el parametro del evento
function sumar(event) {
  //Se manda a llamar el evento .preventDefault() para que el form no reinicie la pagina
  event.preventDefault();
  //Se inicializa la variable sumaInputs que seria el resultado de sumar input1 e input2
  const sumaInputs = input1.value + input2.value;
  //Se escribe dentro de pResult "Resultado: " y se le concatena el valor de la variable sumaInputs
  pResult.innerText = "Resultado: " + sumaInputs;
}