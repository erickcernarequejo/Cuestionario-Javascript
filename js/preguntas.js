const examen = new Examen();
const btnAvanzar = document.getElementById('btnAvanzar');

cargarEventos();

function cargarEventos() {
    document.addEventListener('DOMContentLoaded', mostrar);
    btnAvanzar.addEventListener('click', verificar);
}

let i = 0;
let respuesta;

function mostrar() {
    fetch('json/preguntas.json')
        .then(response => {
            return response.json();
        })
        .then(response => {

            if (i === response.length) {
                location.href = "index.html";
            }
            else {
                document.getElementById('tituloPregunta').innerHTML = `${i+1}. ${response[i].tituloPregunta}`
                document.getElementById('opcion1').innerHTML = response[i].opciones[0].alternativa1;
                document.getElementById('opcion2').innerHTML = response[i].opciones[0].alternativa2;
                document.getElementById('opcion3').innerHTML = response[i].opciones[0].alternativa3;
                document.getElementById('opcion4').innerHTML = response[i].opciones[0].alternativa4;
                respuesta = response[i].respuesta;

                i = i + 1;

            }

        })
        .catch(error => {
            console.log(error);
        })
}

function verificar() {

    mostrar();

    const tipo = document.querySelector('input[name="alternativas"]:checked').value;
    let respuestaLS;
    respuestaLS = examen.obtenerExamenLocalStorage();
    let tamaño = respuestaLS.length;

    if(respuesta == tipo){
        respuestaLS[tamaño - 1].puntaje = respuestaLS[tamaño -1].puntaje + 1;
        
        localStorage.setItem('examen', JSON.stringify(respuestaLS));
    }
    else {
        respuestaLS[tamaño - 1].puntaje = respuestaLS[tamaño -1].puntaje + 0;
        
        localStorage.setItem('examen', JSON.stringify(respuestaLS));
    }


}




