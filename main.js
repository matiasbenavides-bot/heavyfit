// Función para calcular 1RM usando fórmula de Epley
function calculate1RM(weight, reps) {
    return Math.round(weight * (1 + reps / 30));
}

// Función para calcular volumen total
function calculateVolume(weight, reps, sets) {
    return weight * reps * sets;
}

// Seleccionamos todos los botones "Calcular"
document.querySelectorAll('.calculate-btn').forEach(button => {
    button.addEventListener('click', () => {
        const card = button.parentElement;

        // Tomamos los valores de los inputs
        const sets = parseInt(card.querySelector('.sets').value);
        const reps = parseInt(card.querySelector('.reps').value);
        const weight = parseInt(card.querySelector('.weight').value);

        // Validación estricta: no 0, no negativos, no vacíos
        if (!sets || sets < 1 || !reps || reps < 1 || !weight || weight < 1) {
            card.querySelector('.result').textContent = "Ingresa valores válidos homosexual;
            return;
        }

        // Calculamos volumen y 1RM
        const volume = calculateVolume(weight, reps, sets);
        const oneRM = calculate1RM(weight, reps);

        // Mostramos resultados en la card correspondiente
        card.querySelector('.result').innerHTML = `
            Volumen total: ${volume} kg<br>
            1RM estimado: ${oneRM} kg
        `;
    });
});


