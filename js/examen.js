class Examen {

    empezarExamen(nombre, edad, email){
        const infoPersona = {
            nombre : nombre,
            edad : edad,
            email : email,
            puntaje : 0
        }

        this.guardarExamenLocalStorage(infoPersona);
        
        location.href = "preguntas.html";
    }
    
    guardarExamenLocalStorage(infoPersona){
        let examen;

        examen = this.obtenerExamenLocalStorage();

        examen.push(infoPersona);

        localStorage.setItem('examen', JSON.stringify(examen));
    }

    obtenerExamenLocalStorage(){
        let examenLS;

        if(localStorage.getItem('examen')===null){
            examenLS = [];
        }
        else {
            examenLS = JSON.parse(localStorage.getItem('examen'));
        }
        return examenLS;
    }

    leerLocalStorage(e){
        e.preventDefault();

        document.getElementById('muestra-resultados').hidden = false;

        let examenLS;

        examenLS = this.obtenerExamenLocalStorage();

        examenLS.sort((a,b) => {
            return b.puntaje - a.puntaje;
        });

        examenLS.forEach(examen => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${examen.nombre}</td>
                <td>${examen.edad}</td>
                <td>${examen.email}</td>
                <td>${examen.puntaje}</td>
            `;
            listaResultados.appendChild(row);
        })
    }

}