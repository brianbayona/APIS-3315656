const updatePostFull = async () => { // Solicitud 6: Actualizar completamente una publicación existente (PUT)
  try { // La URL final será algo como: .../posts/1 para actualizar la publicación con ID 1
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', { // Realizamos la petición a la API para actualizar completamente la publicación con ID 1
      method: 'PUT', // Especificamos el método PUT para actualizar completamente un recurso existente
      body: JSON.stringify({ // Convertimos el objeto con los nuevos datos de la publicación a formato JSON para enviarlo en el cuerpo de la solicitud
        id: 1, // El ID de la publicación que estamos actualizando (en JSONPlaceholder, el ID debe ser incluido en el cuerpo para PUT)
        title: 'Nuevo Título Totalmente Renovado', // El nuevo título de la publicación que reemplaza al anterior
        body: 'Este es el nuevo contenido de la publicación que reemplaza al anterior.', // El nuevo contenido de la publicación que reemplaza al anterior
        userId: 1, // El ID del usuario al que pertenece la publicación (en JSONPlaceholder, los usuarios van del 1 al 10)
      }),
      headers: { // Configuramos los encabezados para indicar que el cuerpo de la solicitud es JSON
        'Content-type': 'application/json; charset=UTF-8', // Especificamos el tipo de contenido como JSON con codificación UTF-8
      },
    });

    const data = await response.json(); // Convertimos la respuesta a formato JSON para obtener los datos de la publicación actualizada
    console.log('Resultado PUT (Actualización Completa):', data); // Mostramos el resultado de la actualización completa en la consola para verificar los cambios realizados
  } catch (error) { // Si ocurre un error durante el proceso, lo capturamos y mostramos un mensaje de error en la consola
    console.error('Error en PUT:', error); // Mostramos el mensaje de error específico en la consola para facilitar la depuración en caso de que la actualización falle por alguna razón (como problemas de red o errores en la API)
  }
};

updatePostFull(); // Ejecutamos la función para realizar la actualización completa de la publicación con ID 1 usando el método PUT

// Modificar solo el título de la publicación con ID 1
const updatePostPartial = async () => { // Solicitud 7: Actualizar parcialmente una publicación existente (PATCH)
  try { // La URL final será algo como: .../posts/1 para actualizar parcialmente la publicación con ID 1
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', { // Realizamos la petición a la API para actualizar parcialmente la publicación con ID 1
      method: 'PATCH', // Especificamos el método PATCH para actualizar parcialmente un recurso existente
      body: JSON.stringify({ // Convertimos el objeto con los datos que queremos actualizar a formato JSON para enviarlo en el cuerpo de la solicitud
        title: 'Solo cambié el título con PATCH', // El nuevo título de la publicación que reemplaza al anterior, mientras que el resto de los campos (body y userId) permanecerán sin cambios
      }),
      headers: { // Configuramos los encabezados para indicar que el cuerpo de la solicitud es JSON
        'Content-type': 'application/json; charset=UTF-8', // Especificamos el tipo de contenido como JSON con codificación UTF-8
      },
    });

    const data = await response.json(); // Convertimos la respuesta a formato JSON para obtener los datos de la publicación actualizada parcialmente
    console.log('Resultado PATCH (Actualización Parcial):', data); // Mostramos el resultado de la actualización parcial en la consola para verificar que solo el título fue modificado, mientras que el contenido y el userId permanecieron sin cambios
  } catch (error) {
    console.error('Error en PATCH:', error);
  }
};

updatePostPartial(); // Ejecutamos la función para realizar la actualización parcial de la publicación con ID 1 usando el método PATCH, modificando solo el título y dejando el resto de los campos sin cambios