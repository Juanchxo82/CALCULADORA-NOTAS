function calcularPromedio() {
    let n1 = parseFloat(document.getElementById('nota1').value);
    let n2 = parseFloat(document.getElementById('nota2').value);
    let n3 = parseFloat(document.getElementById('nota3').value);

    // Validar que los campos no estén vacíos y estén entre 0 y 5
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        alert("¡Ey! Por favor ingresa todas las notas.");
        return;
    }

    if (n1 < 0 || n1 > 5 || n2 < 0 || n2 > 5 || n3 < 0 || n3 > 5) {
        alert("Las notas deben estar estrictamente en un rango de 0 a 5.");
        return;
    }

    // Calcular promedio
    let promedio = (n1 + n2 + n3) / 3;

    // Mostrar el contenedor de resultados
    let divResultado = document.getElementById('resultado');
    let textoPromedio = document.getElementById('texto-promedio');
    let mensajeEstado = document.getElementById('mensaje-estado');

    divResultado.classList.remove('hidden');
    textoPromedio.innerText = `Promedio: ${promedio.toFixed(2)}`;

    // Condición de aprobación (si es mayor a 3)
    if (promedio > 3) {
        mensajeEstado.innerText = "¡APROBASTE!";
        divResultado.className = "resultado aprobado";
    } else {
        mensajeEstado.innerText = "SIGUE INTENTÁNDOLO";
        divResultado.className = "resultado reprobado";
    }
}
