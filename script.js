const usuario = document.getElementById("usuario");
const grupo = document.getElementById("grupo");
const otros = document.getElementById("otros");
const numero = document.getElementById("numero");
const btnLimpiar = document.getElementById("btnLimpiar");

function actualizarNumero() {
    numero.value = `${usuario.value}${grupo.value}${otros.value}`;
}

function actualizarSelects() {
    let valor = numero.value;

    if (!/^[0-7]*$/.test(valor)) {
        numero.value = valor.slice(0, -1);
        return;
    }

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

function limpiarTodo() {
    numero.value = "";
    usuario.value = "0";
    grupo.value = "0";
    otros.value = "0";
}

usuario.addEventListener("change", actualizarNumero);
grupo.addEventListener("change", actualizarNumero);
otros.addEventListener("change", actualizarNumero);

numero.addEventListener("input", actualizarSelects);

btnLimpiar.addEventListener("click", limpiarTodo);