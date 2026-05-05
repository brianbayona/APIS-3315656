const BASE_URL = 'https://jsonplaceholder.typicode.com';

async function actualizarPostParcial() {
  try {
    const respuesta = await fetch(`${BASE_URL}/posts/1`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: 'Título actualizado parcialmente'
      })
    });

    if (!respuesta.ok) throw new Error('Error en PATCH');

    const data = await respuesta.json();
    console.log('PATCH:', data);

  } catch (error) {
    console.error(error);
  }
}

actualizarPostParcial();