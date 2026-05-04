document.addEventListener("DOMContentLoaded", function() {
  const btnQuienes = document.getElementById('btn-quienes');
  const seccionQuienes = document.getElementById('quienes_somos');
  const btnCerrar = document.getElementById('cerrar-quienes');

  btnQuienes.addEventListener('click', function(event) {
    event.preventDefault();
    seccionQuienes.style.display = 'block';
  });

  btnCerrar.addEventListener('click', function() {
    seccionQuienes.style.display = 'none';
  });
});


//documente es el objeto, el get es el metodo, la propiedad es texconten

//document.getElementById("nombre").textContent = "Juan";

//const nombre = "luis",
//const apellido = "perez", 
//const ciudad = "lima";

//document.getElementById("nombre").textContent = nombre + " " + apellido + " " + ciudad;

//template string
//document.getElementById("nombre").textContent = `${nombre} ${apellido} ${ciudad}`;



