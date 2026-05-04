const verifyResource = async (postId) => {// Función para verificar el estado de un recurso específico (en este caso, una publicación) usando su ID
  console.log(`--- Verificando estado del recurso con ID: ${postId} ---`); // Mostramos un mensaje en la consola indicando que estamos verificando el estado del recurso con el ID proporcionado

  try { // Realizamos la petición a la API para obtener el recurso por su ID
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`); // La URL final será algo como: .../posts/1 para verificar el recurso con ID 1

    // Análisis del Código de Estado (Status Code)
    if (response.status === 200) { // Si el código de estado es 200 OK, significa que el recurso existe y fue obtenido correctamente
      const data = await response.json(); // Convertimos la respuesta a formato JSON para obtener los datos del recurso
      console.log('Estado 200 OK: El recurso existe.'); // Mostramos un mensaje indicando que el recurso existe
      console.log('Contenido actual:', data); // Mostramos el contenido actual del recurso en la consola para verificar que se obtuvo correctamente
    } else if (response.status === 404) { // Si el código de estado es 404 Not Found, significa que el recurso no existe (fue eliminado o nunca existió)
      console.warn('Estado 404 Not Found: El recurso no existe (fue eliminado o nunca existió).'); // Mostramos una advertencia indicando que el recurso no existe, lo que puede deberse a que fue eliminado o nunca existió en la API
    } else { // Para cualquier otro código de estado, mostramos un mensaje indicando que la respuesta fue inesperada, junto con el código de estado para facilitar la depuración
      console.log(`Respuesta inesperada: Código ${response.status}`); // Mostramos un mensaje indicando que la respuesta fue inesperada, junto con el código de estado para facilitar la depuración en caso de que ocurra algo fuera de lo común (como errores del servidor o problemas de red)
    }

  } catch (error) { // Si ocurre un error durante el proceso (como problemas de red o errores en la API), lo capturamos y mostramos un mensaje de error en la consola para facilitar la depuración
    console.error('Error en la red o en la solicitud:', error); // Mostramos un mensaje de error específico en la consola para facilitar la depuración en caso de que la solicitud falle por alguna razón (como problemas de red o errores en la API)
  }
};

// Ejecutar verificación para el post 1
verifyResource(1); // Ejecutamos la función para verificar el estado del recurso con ID 1, lo que nos permitirá confirmar si el recurso existe y obtener su contenido actual, o si fue eliminado o nunca existió, mostrando la información relevante en la consola para cada caso.