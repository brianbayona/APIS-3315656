// Configuración base (Usando JSONPlaceholder como ejemplo)
const BASE_URL = 'https://jsonplaceholder.typicode.com'; // API de prueba para usuarios y posts

async function crearPublicacion(titulo, contenido, usuarioId) {// Función para crear una nueva publicación usando el método POST
  try { // La URL final será: .../posts
    const respuesta = await fetch(`${BASE_URL}/posts`, { // Realizamos la petición a la API para crear una nueva publicación
      method: 'POST', // Especificamos el método POST para crear un nuevo recurso
      headers: { // Configuramos los encabezados para indicar que el cuerpo de la solicitud es JSON
        'Content-Type': 'application/json; charset=UTF-8', // Especificamos el tipo de contenido como JSON con codificación UTF-8
      },
      body: JSON.stringify({ // Convertimos el objeto con los datos de la publicación a formato JSON para enviarlo en el cuerpo de la solicitud
        title: titulo, // El título de la publicación
        body: contenido,  // El contenido de la publicación
        userId: usuarioId, // El ID del usuario que crea la publicación (en JSONPlaceholder, los usuarios van del 1 al 10)
      }),
    });

    if (!respuesta.ok) throw new Error('Error al crear la publicación'); // Validamos si la respuesta fue exitosa, si no, lanzamos un error

    const data = await respuesta.json(); // Convertimos la respuesta a formato JSON para obtener los datos de la publicación creada
    console.log(' Publicación creada con éxito:', data); // Mostramos un mensaje de éxito junto con los datos de la publicación creada en la consola
    return data; // Devolvemos los datos de la publicación creada para su uso posterior si es necesario
  } catch (error) { // Si ocurre un error durante el proceso, lo capturamos y mostramos un mensaje de error en la consola
    console.error(' Error en Solicitud 4:', error.message); // Mostramos el mensaje de error específico en la consola para facilitar la depuración
  }
}

async function crearComentario(publicacionId, nombre, email, contenido) { // Función para crear un nuevo comentario usando el método POST
  try { // La URL final será: .../comments
    const respuesta = await fetch(`${BASE_URL}/comments`, { // Realizamos la petición a la API para crear un nuevo comentario
      method: 'POST', // Especificamos el método POST para crear un nuevo recurso
      headers: { // Configuramos los encabezados para indicar que el cuerpo de la solicitud es JSON
        'Content-Type': 'application/json; charset=UTF-8', // Especificamos el tipo de contenido como JSON con codificación UTF-8
      },
      body: JSON.stringify({ // Convertimos el objeto con los datos del comentario a formato JSON para enviarlo en el cuerpo de la solicitud
        postId: publicacionId,
        name: nombre,
        email: email,
        body: contenido,
      }),
    });

    if (!respuesta.ok) throw new Error('Error al registrar el comentario');// Validamos si la respuesta fue exitosa, si no, lanzamos un error

    const data = await respuesta.json(); // Convertimos la respuesta a formato JSON para obtener los datos del comentario creado
    console.log(' Comentario registrado con éxito:', data);// Mostramos un mensaje de éxito junto con los datos del comentario creado en la consola
    return data;
  } catch (error) {
    console.error(' Error en Solicitud 5:', error.message);
  }
}



crearPublicacion( // Ejemplo: Crear una nueva publicación para el usuario con ID 1
  "Mi experiencia con APIs", // El título de la publicación que describe brevemente el tema de la publicación
  "Aprender a usar el método POST es fundamental para el desarrollo web.", // El contenido de la publicación que proporciona más detalles sobre el tema tratado
  1
);

crearComentario(  // Ejemplo: Crear un nuevo comentario para la publicación con ID 1
  1,
  "Guillermo", // El nombre del autor del comentario, que en este caso es "Guillermo"
  "guillermo@example.com",  // El correo electrónico del autor del comentario, que es "
  "¡Excelente explicación! Me sirvió mucho."  // El contenido del comentario que expresa una opinión positiva sobre la explicación proporcionada en la publicación
);