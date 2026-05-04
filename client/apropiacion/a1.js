const BASE_URL = 'https://jsonplaceholder.typicode.com'; // API de prueba para usuarios y posts
// Usando Async/Await para mayor claridad
async function obtenerUsuarios() {// Función para obtener la lista de usuarios
  try { // Realizamos la petición a la API para obtener los usuarios
    const respuesta = await fetch(`${BASE_URL}/users`); // La URL final será: .../users
    if (!respuesta.ok) throw new Error('Error al obtener usuarios');// Validamos si la respuesta fue exitosa

    const usuarios = await respuesta.json(); // Convertimos la respuesta a formato JSON
    console.log('Lista de Usuarios:', usuarios); // Mostramos la lista de usuarios en la consola
  } catch (error) { // Si ocurre un error, lo capturamos y mostramos un mensaje de error
    console.error('Hubo un problema:', error); // Mostramos el mensaje de error en la consola
  }
}

obtenerUsuarios(); // Ejecutamos la función para obtener los usuarios 
async function obtenerUsuarioPorId(id) { // Función para obtener un usuario específico por su ID
  try {// La URL final será algo como: .../users/1 para obtener el usuario con ID 1
    const respuesta = await fetch(`${BASE_URL}/users/${id}`);// Realizamos la petición a la API para obtener el usuario por ID
    if (!respuesta.ok) throw new Error('Usuario no encontrado');// Validamos si la respuesta fue exitosa, si no, lanzamos un error

    const usuario = await respuesta.json();// Convertimos la respuesta a formato JSON y obtenemos los datos del usuario
    console.log(`Datos del usuario ${id}:`, usuario); // Mostramos los datos del usuario en la consola 
  } catch (error) {
    console.error('Error:', error);
  }
}

// Ejemplo: Consultar el usuario con ID 2
obtenerUsuarioPorId(2); // Ejecutamos la función para obtener el usuario con ID 2

async function obtenerPostsDeUsuario(userId) { // Función para obtener las publicaciones de un usuario específico por su ID
  try {
    // La URL final será algo como: .../posts?userId=1
    const respuesta = await fetch(`${BASE_URL}/posts?userId=${userId}`);// Realizamos la petición a la API para obtener las publicaciones del usuario por su ID
    if (!respuesta.ok) throw new Error('Error al obtener publicaciones');// Validamos si la respuesta fue exitosa, si no, lanzamos un error
    const posts = await respuesta.json(); // Convertimos la respuesta a formato JSON y obtenemos las publicaciones del usuario
    console.log(`Publicaciones del usuario ${userId}:`, posts); // Mostramos las publicaciones del usuario en la consola
  } catch (error) {
    console.error('Error:', error);
  }
}

// Ejemplo: Obtener posts del usuario con ID 1
obtenerPostsDeUsuario(1);