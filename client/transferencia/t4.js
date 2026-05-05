const BASE_URL = 'https://jsonplaceholder.typicode.com';

async function eliminarSiNoTieneComentarios(postId) {
  try {
    // 🔹 1. Consultar publicaciones
    const resPost = await fetch(`${BASE_URL}/posts/${postId}`);
    if (!resPost.ok) throw new Error('Publicación no encontrada');

    const post = await resPost.json();
    console.log('Post encontrado:', post);

    // 🔹 2. Consultar comentarios de ese post
    const resComments = await fetch(`${BASE_URL}/comments?postId=${postId}`);
    if (!resComments.ok) throw new Error('Error al obtener comentarios');

    const comments = await resComments.json();
    console.log('Comentarios:', comments);

    // 🔹 3. Validar si tiene comentarios
    if (comments.length > 0) {
      console.log(' No se puede eliminar la publicación porque tiene comentarios');
      return;
    }

    // 🔹 4. Si NO tiene comentarios → eliminar
    const resDelete = await fetch(`${BASE_URL}/posts/${postId}`, {
      method: 'DELETE'
    });

    if (!resDelete.ok) throw new Error('Error al eliminar');

    console.log('Publicación eliminada correctamente');

    // 🔹 5. Validar resultado (consulta nuevamente)
    const validar = await fetch(`${BASE_URL}/posts/${postId}`);
    const resultado = await validar.json();

    console.log('Verificación (simulada):', resultado);

  } catch (error) {
    console.error('Error:', error);
  }
}

// Cambia el ID para probar
eliminarSiNoTieneComentarios(1);