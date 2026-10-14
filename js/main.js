// Busca todas las tarjetas de proyectos
const proyectos = document.querySelectorAll(".project-card");

//Recorre todos los proyectos uno por uno
proyectos.forEach(function (proyecto) {
  //Busca el botón de "ver más" dentro del proyecto
  const botonMas = proyecto.querySelector(".project-more");
  //Busca el contenido extra del proyecto
  const detalles = proyecto.querySelector(".project-details");
  //Cuando hacemos clic en el botón
  botonMas.addEventListener("click", function () {
    //comprueba si los detalles están ocultos
    if (detalles.hidden == true) {
      //Muestra los detalles
      detalles.hidden = false;
      //Indica que el botón está abierto
      botonMas.setAttribute("aria-expanded", "true");
      //Cambia el texto accesible del botón
      botonMas.setAttribute("aria-label", "ocultar información del proyecto");
      //Añade una clase para cambiar el diseño de la tarjeta
      proyecto.classList.add("is-expanded");
    } else {
      //Añade la animación de cierre
      detalles.classList.add("cerrando");
      //Espera a que termine la animación
      setTimeout(function () {
        //Oculta los detalles
        detalles.hidden = true;
        //Quita la clase de la animación
        detalles.classList.remove("cerrando");
        //La tarjeta vuelve a su tamaño normal
        proyecto.classList.remove("is-expanded");
      }, 180);
      //Indica que el botón está cerrado
      botonMas.setAttribute("aria-expanded", "false");
      //Cambia el texto accesible del botón
      botonMas.setAttribute("aria-label", "Ver más información del proyecto");
    }
  });
});

/*======================================================
  Añadimos animación en tiempo real de la línea y ahora
=======================================================*/

//Busca el calendario
const calendario = document.querySelector(".timeline-panel");
//Obtiene la fecha de hoy
const hoy = new Date();
//Obtine el año actual
const anioActual = hoy.getFullYear();
//Comprueba que existe el calendario
if (calendario) {
  //Variable para saber dónde empieza y cúanto ocupa cada año
  let inicioAnio;
  let anchoAnio;

  if (anioActual == 2024) {
    inicioAnio = 0;
    anchoAnio = 25;
  }

  //Año 2025
  else if (anioActual == 2025) {
    inicioAnio = 25;
    anchoAnio = 30;
  }
  //Año 2026
  else if (anioActual == 2026) {
    inicioAnio = 55;
    anchoAnio = 45;
  }
  //Solo calcula la posición si estamos dentro de los años del calendario
  if (inicioAnio != undefined) {
    //Primer día del año
    const inicio = new Date(anioActual, 0, 1);
    //Primer día del año siguiente
    const final = new Date(anioActual + 1, 0, 1);
    //Milisegundos que tiene un día
    const unDia = 1000 * 60 * 60 * 24;
    //Días que han pasado desde el 1 de enero
    const diasPasados = (hoy - inicio) / unDia;
    //Número total de días del año
    const diaTotales = (final - inicio) / unDia;
    //Porcentaje del año que ha pasado
    const porcentajeAnio = diasPasados / diaTotales;
    //Calcula la posición dentro del calendario
    const posicionHoy = inicioAnio + porcentajeAnio * anchoAnio;
    //Actualiza la línea de " Hoy "
    calendario.style.setProperty("--hoy-posicion", posicionHoy + "%");
  }
}
