window.onload = function() {
    const usuarioRegistrado = JSON.parse(localStorage.getItem('usuarioRegistrado'));

    if (usuarioRegistrado) 
    {
        document.getElementById('usuario-info').innerHTML = `
            <span class="me-3">Bienvenido, <strong>${usuarioRegistrado.nombre}</strong></span>
            <button id="cerrarSesionBtn" class="btn btn-danger">Cerrar Sesión</button>
        `;

        document.getElementById('cerrarSesionBtn').addEventListener('click', function() {
            localStorage.removeItem('usuarioRegistrado');
            window.location.href = "../vistas/inicio.html";
        });
    }
};
