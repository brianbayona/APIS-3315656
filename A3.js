const updatePostFull = async () => { // Solicitud 6: Actualizar completamente una publicación existente (PUT)
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      body: JSON.stringify({
        id: 1,
        title: 'Nuevo Título Totalmente Renovado',
        body: 'Este es el nuevo contenido de la publicación que reemplaza al anterior.',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const data = await response.json();
    console.log('Resultado PUT (Actualización Completa):', data);
  } catch (error) {
    console.error('Error en PUT:', error);
  }
};

updatePostFull();

// Modificar solo el título de la publicación con ID 1
const updatePostPartial = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PATCH',
      body: JSON.stringify({
        title: 'Solo cambié el título con PATCH',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const data = await response.json();
    console.log('Resultado PATCH (Actualización Parcial):', data);
  } catch (error) {
    console.error('Error en PATCH:', error);
  }
};

updatePostPartial();