//Inicializar una variable con el query de un elemento HTML
const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const input = document.querySelector("input");

//Inicializar una variable con la clase de un elemento HTML
const parrafoClase = document.getElementsByClassName("parrafoClase");

//Inicializar una variable con el id de un elemento HTML
const parrafoId = document.getElementById("parrafoId");

//Imprimir en consola el valor de un input
console.log(input.value);

//Imprimir en consola barias variables como si fueran un array
console.log({
    h1,
    p,
    parrafoClase,
    parrafoId,
    input
});

//Es para manipular literalmente el HTML
h1.innerHTML = "InnerHTML <br> Tambien etiquetas";

//Es para manipular el texto del HTML
h1.innerText = "Solo texto";

//Es para cambiar el valor del atributo seleccionado
h1.setAttribute("class", "tuyo");

//Es para agregarle un valor a la clase seleccionada
h1.classList.add("nosotros");

//Es para quitarle un valor a la clase seleccionada
h1.classList.remove("nosotros");

//Modificar el value del input seleccionado
input.value = "123";

//Inicializar una variable, creando un elemento HTML
const img = document.createElement("img");

//Ponerle atributo y poniendole un valor tambien
img.setAttribute("src", "./vaca.jpg")

//Eliminando el texto del elemento HTML seleccionado
parrafoId.innerText = "";

//Ubicar un elemento HTML dentro de otro elemento HTML
parrafoId.append(img);