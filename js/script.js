// Hacemos la clase alumno 
class Alumno {
    constructor(id, nombre, matricula, especialidad, semestre, fechaDeNacimiento) {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.matricula = matricula;
        this.especialidad = especialidad;
        this.semestre = parseInt(semestre);
        this.fechaDeNacimiento = new Date(" ");
    }
}

console.table(estudiante);
let eleccion = parseInt(prompt('¿Que es lo que deseas hacer?\n1.-Buscar un alumno\n2.-Buscar una carrera y ver que alumnos hay\n3.-Eliminar un alumno\n4.-agregar un alumno\n'));

let busqueda = [];

function elegirOpcion(opcion) {
    switch (opcion) {
        case 1:
            // Buscar un alumno
            let verId = parseInt(prompt('Ingresa el ID que quieres buscar'));
            busqueda = estudiante.filter(buscar => buscar.id == verId);
            console.table(busqueda);
            break;
        case 2:
            // Buscar una carrera
            let buscarCarrera = prompt('Ingresa la carrera que quieres buscar');
            if (!estudiante.some((el) => el.especialidad == buscarCarrera)) {
                alert('Carrera no encontrada')
            } else {
                busqueda = estudiante.filter(buscar => buscar.especialidad == buscarCarrera);
                console.table(busqueda);
            }
            break;
        case 3:
            // Eliminar un alumno
            let aEliminar = prompt('Ingresa el nombre del alumno que quieres eliminar');
            const eliminar = (aEliminar) => {
                let index = estudiante.includes(aEliminar);
                if (index = !1) {
                    estudiante.splice(index, 1);
                }
            }
            eliminar(aEliminar);
            break;
        case 4:
            //Agregar o dar de alta un alumno
            let id = parseInt(prompt('Ingresa el ID'));
            let name = prompt('Ingresa el nombre del alumno');
            let numberStudent = prompt('Ingresa la matrícula');
            let career = prompt('Ingresa la carrera');
            let sixMonth = prompt('Ingresa el semestre (en número)');
            let Birthdate = prompt('Ingresa la fecha de nacimiento (año, mes, día)');
            estudiante.push(new Alumno(id, name, numberStudent, career, sixMonth, Birthdate));
            console.table(Alumno);
            break;
        default:
            alert('opción invalida');
            break;
    }
}

elegirOpcion(eleccion);