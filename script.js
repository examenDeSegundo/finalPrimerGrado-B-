const respuestasCorrectas = {
    p1: "b", p2: "a", p3: "b", p4: "a",
    p5: "a", p6: "a", p7: "a", p8: "a",
    p9: "a", p10: "a", p11: "a"
};

function mostrarNombre() {
    const alumno = document.getElementById("alumno").value;
    document.getElementById("nombreMostrado").textContent = alumno || "---";
}

function calificar() {
    let calificacion = 0;
    let alumno = document.getElementById("alumno").value;

    if (!alumno) {
        alert("Selecciona tu nombre");
        return;
    }

    document.querySelectorAll(".pregunta").forEach(p =>
        p.classList.remove("incorrecta")
    );

    for (let p in respuestasCorrectas) {
        const seleccion = document.querySelector(`input[name="${p}"]:checked`);
        if (seleccion && seleccion.value === respuestasCorrectas[p]) {
            calificacion++;
        } else {
            document.querySelector(`input[name="${p}"]`)
                .closest(".pregunta")
                .classList.add("incorrecta");
        }
    }

    document.getElementById("resultado").textContent =
        `Alumno: ${alumno} | Calificación: ${calificacion} / 11`;

    document.getElementById("correoAlumno").value = alumno;
    document.getElementById("correoCalificacion").value =
        `${calificacion} de 11`;
}
