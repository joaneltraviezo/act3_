function registrarUsuario(event) 
{
    event.preventDefault();
    
    const correoRegistro = document.getElementById('correoRegistro').value;
    const contrasenaRegistro = document.getElementById('contrasenaRegistro').value;

    if (!correoRegistro || !contrasenaRegistro) 
    {
        alert("Por favor, complete ambos campos.");
        return;
    }

    localStorage.setItem('usuarioRegistrado', JSON.stringify(
        { 
            correo: correoRegistro, 
            contraseña: contrasenaRegistro 
        }
    )
    );
    alert("Registro exitoso. Ahora puedes iniciar sesión.");
    window.location.href = "../Login_Registro/Login.html";
}

document.getElementById('registroForm').addEventListener("submit", registrarUsuario);
