function mostrarInicio() {
  document.getElementById("inicioContenido").style.display = "block";
  document.getElementById("categoriasContenido").style.display = "none";
}

function mostrarCategorias() {
  document.getElementById("inicioContenido").style.display = "none";
  document.getElementById("categoriasContenido").style.display = "block";
}

function cargarContenido(archivo) {
  fetch(archivo)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("contenido").innerHTML = data;
    })
    .catch((error) => console.log(error));
}
