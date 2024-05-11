// 1. Insertar texto en un elemento HTML
const textoInstertado = document.getElementById('textoInsertadoDesdeJS');
textoInstertado.innerHTML = '1) Hola Mundo desde JS';

// 2. Saludar al usuario, con el nombre almacenado en una variable
let nombre = 'Victor';
const saludo = document.getElementById('saludo').innerHTML = '2) Hola ' + nombre;

// 3. Saludar al usuario, con el nombre almacenado en un input (función)
function saludar3() {
  let inputNombre = document.getElementById('inputNombre').value;
  let saludoParrafo = document.getElementById('saludoParrafo');
  saludoParrafo.innerHTML = '3) Hola ' + inputNombre;
}

// 4) Crear tarjetas desde un objeto JS y mostrarlos en el HTML
const tarjetas = [
  {
    id: 1,
    titulo: "Tarjeta 1",
    descripcion: "Esta es la descripción de la tarjeta 1.",
    imagen: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    titulo: "Tarjeta 2",
    descripcion: "Esta es la descripción de la tarjeta 2.",
    imagen: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    titulo: "Tarjeta 3",
    descripcion: "Esta es la descripción de la tarjeta 3.",
    imagen: "https://via.placeholder.com/150"
  },
  {
    id: 4,
    titulo: "Tarjeta 4 - tarjeta número 4",
    descripcion: "Esta es la descripción de la tarjeta 4. Queremos ver como se comporta la tarjeta y sus elementos si se desborda de contenido",
    imagen: "https://via.placeholder.com/450"
  }
];

function mostrarTarjetas() {
  const contenedorTarjetas = document.getElementById("contenedor-tarjetas");

  tarjetas.forEach(tarjeta => {
    const divTarjeta = document.createElement("div");
    divTarjeta.classList.add("tarjeta");

    const tituloTarjeta = document.createElement("h2");
    tituloTarjeta.textContent = tarjeta.titulo;

    const descripcionTarjeta = document.createElement("p");
    descripcionTarjeta.textContent = tarjeta.descripcion;

    const imagenTarjeta = document.createElement("img");
    imagenTarjeta.src = tarjeta.imagen;
    imagenTarjeta.alt = tarjeta.titulo;

    divTarjeta.appendChild(tituloTarjeta);
    divTarjeta.appendChild(descripcionTarjeta);
    divTarjeta.appendChild(imagenTarjeta);

    contenedorTarjetas.appendChild(divTarjeta);
  });
}

mostrarTarjetas();

// 5) Objetos
const miObjeto = new Object();

miObjeto.nombre = "Victor";
miObjeto.apellido = "Gonzalez";
miObjeto.edad = 25;

const objeto1 = document.getElementById('pObjeto1');
//objeto1.innerHTML = 'Objeto 1: ' + JSON.stringify(miObjeto);
objeto1.innerHTML = 'Objeto 1: ' + JSON.stringify(miObjeto).concat(' .Este objeto se llama ' + miObjeto.nombre);
objeto1.style.color = 'blue';
objeto1.style.textDecorationLine = 'underline';
objeto1.style.border = '2px solid black';
objeto1.style.borderRadius = '5%';
objeto1.style.padding = '10px';
objeto1.style.background = 'skyblue';

