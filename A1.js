const BASE_URL = 'https://jsonplaceholder.typicode.com';
// Usando Async/Await para mayor claridad
async function obtenerUsuarios() {
  try {
    const respuesta = await fetch(`${BASE_URL}/users`);
    if (!respuesta.ok) throw new Error('Error al obtener usuarios');

    const usuarios = await respuesta.json();
    console.log('Lista de Usuarios:', usuarios);
  } catch (error) {
    console.error('Hubo un problema:', error);
  }
}

obtenerUsuarios();
async function obtenerUsuarioPorId(id) {
  try {
    const respuesta = await fetch(`${BASE_URL}/users/${id}`);
    if (!respuesta.ok) throw new Error('Usuario no encontrado');

    const usuario = await respuesta.json();
    console.log(`Datos del usuario ${id}:`, usuario);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Ejemplo: Consultar el usuario con ID 2
obtenerUsuarioPorId(2);

async function obtenerPostsDeUsuario(userId) {
  try {
    // La URL final será algo como: .../posts?userId=1
    const respuesta = await fetch(`${BASE_URL}/posts?userId=${userId}`);
    if (!respuesta.ok) throw new Error('Error al obtener publicaciones');

    const posts = await respuesta.json();
    console.log(`Publicaciones del usuario ${userId}:`, posts);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Ejemplo: Obtener posts del usuario con ID 1
obtenerPostsDeUsuario(1);