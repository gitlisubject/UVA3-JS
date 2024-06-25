function registrarUsuario() {

    const usuarioId = document.getElementById('usuarioId').value;
    const contrasena = document.getElementById('contrasena').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;

   
    const fechaNacDate = new Date(fechaNacimiento);
    const hoy = new Date();
    const diferenciaTiempo = hoy.getTime() - fechaNacDate.getTime();
    const diasVividos = Math.floor(diferenciaTiempo / (1000 * 3600 * 24));

   
    document.getElementById('mensajeRegistro').textContent = `Usuario es ${usuarioId}.`;
    const mensajeDias = document.createElement('h2');
    mensajeDias.textContent = `Has vivido ${diasVividos} días desde tu nacimiento.`;
    document.body.appendChild(mensajeDias);
    
}
