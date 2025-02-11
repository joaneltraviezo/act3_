const usuariosPredeterminados = [
    {
        correo: "Jaqueline@gmail.com",
        contraseña: "Jaqui",
        nombre: "Jaqui"
    },
    {
        correo: "Jorge@gmail.com",
        contraseña: "KoKe",
        nombre: "Jorge"
    },
    {
        correo: "osvaldo@gmail.com",
        contraseña: "Baldo",
        nombre: "Osvaldo"
    },
    {
        correo: "Estrella@gmail.com",
        contraseña: "Estrella",
        nombre: "Estrella"
    },
    {
        correo: "Joan@gmail.com",
        contraseña: "ElTravieso",
        nombre: "Joan"
    }
];

function iniciarSesion(event) 
{
    event.preventDefault();
    
    const correoIngresado = document.getElementById('correo').value;
    const contrasenaIngresada = document.getElementById('contrasena').value;

    if (!correoIngresado || !contrasenaIngresada) 
    {
        alert("Por favor, complete ambos campos.");
        return;
    }

    const usuarioPredeterminado = usuariosPredeterminados.find(usuario =>
        usuario.correo === correoIngresado && usuario.contraseña === contrasenaIngresada
    );

    const usuarioRegistrado = JSON.parse(localStorage.getItem('usuarioRegistrado'));

    if (usuarioPredeterminado) 
    {
        localStorage.setItem('usuarioRegistrado', JSON.stringify(usuarioPredeterminado));
        alert(`Inicio de sesión exitoso, bienvenido ${usuarioPredeterminado.nombre}`);
        window.location.href = "../../vistas/inicio.html";
    } 
    else if (usuarioRegistrado && usuarioRegistrado.correo === correoIngresado && usuarioRegistrado.contraseña === contrasenaIngresada) 
    {
        alert(`Inicio de sesión exitoso, bienvenido ${usuarioRegistrado.nombre}`);
        window.location.href = "../../vistas/inicio.html";
    } else {
        alert("Correo o contraseña incorrectos. Intente nuevamente.");
    }
}

document.querySelector("form").addEventListener("submit", iniciarSesion);
