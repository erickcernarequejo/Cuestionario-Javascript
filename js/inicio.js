const examen = new Examen();
const btnEmpezar = document.getElementById('btnEmpezar');
const listaResultados = document.getElementById('listaResultados');
const btnResultado = document.getElementById('btnResultado');

cargarEventos();

function cargarEventos() {
    btnEmpezar.addEventListener('click', verificar);

    btnResultado.addEventListener('click', (e) => {examen.leerLocalStorage(e)});
}

function verificar(e) {
    e.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let edad = document.getElementById('edad').value;
    let email = document.getElementById('email').value;

    if(nombre==='' || edad === '' || email === ''){
        Swal.fire({
            type: 'error',
            title: 'Oops',
            text : 'Ingrese todos los campos requeridos',
            showConfirmButton: false,
            timer: 2000
        })
    }
    else {
        examen.empezarExamen(nombre, edad, email);
    }
}