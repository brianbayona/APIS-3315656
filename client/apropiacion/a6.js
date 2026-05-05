const BASE_URL = 'https://jsonplaceholder.typicode.com';

async function actualizarPostCompleto() {
  try {
    const respuesta = await fetch(`${BASE_URL}/posts/1`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: 1,
        title: 'Nuevo título completo',
        body: 'Nuevo contenido completo',
        userId: 1
      })
    });

    if (!respuesta.ok) throw new Error('Error en PUT');

    const data = await respuesta.json();
    console.log('PUT:', data);

  } catch (error) {
    console.error(error);
  }
}

actualizarPostCompleto();