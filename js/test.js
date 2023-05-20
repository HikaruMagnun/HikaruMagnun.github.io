function iniciar() {
  cargarContenido("Inicio.html");
}
const elementos = document.querySelectorAll(".menu_pestaña_elememt");

elementos.forEach((elemento) => {
  elemento.addEventListener("mouseover", cambiarColor);
  elemento.addEventListener("mouseout", restaurarColor);
});
function cambiarColor() {
  this.style.backgroundColor = "#192944";
}

function restaurarColor() {
  this.style.backgroundColor = "#111927";
}

function cargarContenido(archivo) {
  fetch(archivo)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("contenido").innerHTML = data;
    })
    .catch((error) => console.log(error));
}
