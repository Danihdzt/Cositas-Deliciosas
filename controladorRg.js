let nombre = document.getElementById('nombreUsuario');
let apellidos = document.getElementById('apellidosUsuario');
let correo = document.getElementById('correoUsuario');
let departamento = document.getElementById('departamentoUsuario');
let ciudad = document.getElementById('ciudadUsuario');
let telefono = document.getElementById('telefonoUsuario')
let check = document.getElementById('invalidCheck2');
let btnRegistro = document.getElementById('btnRegistro');

btnRegistro.addEventListener('click', validarFormulario);
function validarFormulario(event) {
    event.preventDefault();

    if (nombre.value == ''){
        nombre.classList.add('is-invalid');
        let ayuda = document.getElementById('ayudaNombre');
        ayuda.textContent = 'Debes diligenciar este campo';
    } else {
        nombre.classList.remove('is-invalid');
        let ayuda = document.getElementById('ayudaNombre');
        ayuda.textContent = '';
    }

    if (apellidos.value == ''){
        apellidos.classList.add('is-invalid');
        let ayuda = document.getElementById('ayudaApellido');
        ayuda.textContent = 'Debes diligenciar este campo';
    } else {
        apellidos.classList.remove('is-invalid');
        let ayuda = document.getElementById('ayudaApellido');
        ayuda.textContent = '';
    }

    if (correo.value == ''){
        correo.classList.add('is-invalid');
        let ayuda = document.getElementById('ayudaCorreo');
        ayuda.textContent = 'Debes diligenciar este campo';
    } else {
        correo.classList.remove('is-invalid');
        let ayuda = document.getElementById('ayudaCorreo');
        ayuda.textContent = '';
    }

    if (departamento.value == ''){
        departamento.classList.add('is-invalid');
        let ayuda = document.getElementById('ayudaDepartamento');
        ayuda.textContent = 'Debes diligenciar este campo';
    } else {
        departamento.classList.remove('is-invalid');
        let ayuda = document.getElementById('ayudaDepartamento');
        ayuda.textContent = '';
    }

    if (ciudad.value == ''){
        ciudad.classList.add('is-invalid');
        let ayuda = document.getElementById('ayudaCiudad');
        ayuda.textContent = 'Debes diligenciar este campo';
    } else {
        ciudad.classList.remove('is-invalid');
        let ayuda = document.getElementById('ayudaCiudad');
        ayuda.textContent = '';
    }

    if (telefono.value == ''){
        telefono.classList.add('is-invalid');
        let ayuda = document.getElementById('ayudaTelefono');
        ayuda.textContent = 'Debes diligenciar este campo';
    } else {
        telefono.classList.remove('is-invalid');
        let ayuda = document.getElementById('ayudaTelefono');
        ayuda.textContent = '';
    }
}
