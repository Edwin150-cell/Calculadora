const usuario = document.getElementById("usuario");
const grupo = document.getElementById("grupo");
const otros = document.getElementById("otros");
const numero = document.getElementById("numero");

// 👉 SELECT → INPUT
function actualizarNumero() {
    numero.value = `${usuario.value}${grupo.value}${otros.value}`;
}

// 👉 INPUT → SELECT
function actualizarSelects() {
    let valor = numero.value;

    // Solo números 0-7
    if (!/^[0-7]*$/.test(valor)) {
        numero.value = valor.slice(0, -1);
        return;
    }

    // Máximo 3 dígitos
    if (valor.length > 3) {
        numero.value = valor.slice(0, 3);
        return;
    }

    if (valor.length === 3) {
        usuario.value = valor[0];
        grupo.value = valor[1];
        otros.value = valor[2];
    }
}

// Eventos
usuario.addEventListener("change", actualizarNumero);
grupo.addEventListener("change", actualizarNumero);
otros.addEventListener("change", actualizarNumero);

numero.addEventListener("input", actualizarSelects);