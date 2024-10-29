// Exportación de datos de otro archivo JS
import { barcelona, roma, paris, londres } from "./ciudades.js";

// Obtener elementos del DOM
let enlaces = document.querySelectorAll("a");
let tituloElemento = document.getElementById("titulo");
let subTituloElemento = document.getElementById("subtitulo");
let parrafoElemento = document.getElementById("parrafo");

// Agregar un evento CLICK a cada enlace
enlaces.forEach(function(enlace) {
    enlace.addEventListener('click', function() {

        // Remover la clase active de todos los enlaces
        enlaces.forEach(function(enlace) {
            enlace.classList.remove("active");
        });

        // Agregar la clase active al enlace actual
        enlace.classList.add("active");

        // Obtener el contenido correspondiente a la elección
        let contenido = obtenerContenido(enlace.textContent);

        // Actualizar el contenido del DOM
        tituloElemento.textContent = contenido.titulo;
        subTituloElemento.textContent = contenido.subtitulo;
        parrafoElemento.textContent = contenido.parrafo;
    });
});

// Función para traer la información correcta de ciudades.js
function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'Paris': paris,
        'Londres': londres
    };
    return contenido[enlace];
}
