const verifyResource = async (postId) => {
  console.log(`--- Verificando estado del recurso con ID: ${postId} ---`);

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

    // Análisis del Código de Estado (Status Code)
    if (response.status === 200) {
      const data = await response.json();
      console.log('Estado 200 OK: El recurso existe.');
      console.log('Contenido actual:', data);
    } else if (response.status === 404) {
      console.warn('Estado 404 Not Found: El recurso no existe (fue eliminado o nunca existió).');
    } else {
      console.log(`Respuesta inesperada: Código ${response.status}`);
    }

  } catch (error) {
    console.error('Error en la red o en la solicitud:', error);
  }
};

// Ejecutar verificación para el post 1
verifyResource(1);