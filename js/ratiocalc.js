function calcular() {
    // Obtiene los valores de los campos de entrada
    const gramosCafe = parseFloat(document.getElementById('gramosCafe').value);
    const ratio = parseFloat(document.getElementById('ratio').value);

    // Verifica si los valores son mayores a 0
    if (ratio > 0 && gramosCafe > 0) {
        // Calcula los gramos de agua
        const gramosAgua = gramosCafe * ratio;

        // Muestra el resultado en la página
        document.getElementById('gramosAgua').innerText = `Cantidad de Agua: ${gramosAgua} gramos`;
    } else {
        console.error('No se puede realizar el cálculo con esos valores. Verifica.');
        document.getElementById('gramosAgua').innerText = 'Error: Los valores deben ser mayores a 0.';
    }
}
