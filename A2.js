// Configuración base (Usando JSONPlaceholder como ejemplo)
const BASE_URL = 'https://jsonplaceholder.typicode.com';

/**
 * Solicitud 4: Crear una nueva publicación
 */
async function crearPublicacion(titulo, contenido, usuarioId) {
  try {
    const respuesta = await fetch(`${BASE_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        title: titulo,
        body: contenido,
        userId: usuarioId,
      }),
    });

    if (!respuesta.ok) throw new Error('Error al crear la publicación');

    const data = await respuesta.json();
    console.log(' Publicación creada con éxito:', data);
    return data;
  } catch (error) {
    console.error(' Error en Solicitud 4:', error.message);
  }
}

/**
 * Solicitud 5: Registrar un nuevo comentario
 */
async function crearComentario(publicacionId, nombre, email, contenido) {
  try {
    const respuesta = await fetch(`${BASE_URL}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        postId: publicacionId,
        name: nombre,
        email: email,
        body: contenido,
      }),
    });

    if (!respuesta.ok) throw new Error('Error al registrar el comentario');

    const data = await respuesta.json();
    console.log(' Comentario registrado con éxito:', data);
    return data;
  } catch (error) {
    console.error(' Error en Solicitud 5:', error.message);
  }
}

// --- Ejecución de las funciones ---

// Ejemplo de Solicitud 4
crearPublicacion(
  "Mi experiencia con APIs",
  "Aprender a usar el método POST es fundamental para el desarrollo web.",
  1
);

// Ejemplo de Solicitud 5
crearComentario(
  1,
  "Guillermo",
  "guillermo@example.com",
  "¡Excelente explicación! Me sirvió mucho."
);