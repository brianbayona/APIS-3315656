const BASE_URL = 'https://jsonplaceholder.typicode.com';

async function eliminarPost() {
  try {
    const respuesta = await fetch(`${BASE_URL}/posts/1`, {
      method: 'DELETE'
    });

    if (!respuesta.ok) throw new Error('Error en DELETE');

    console.log('DELETE: Post eliminado correctamente');

  } catch (error) {
    console.error(error);
  }
}

eliminarPost();