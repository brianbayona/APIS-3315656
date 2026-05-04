async function obtenerUsuariosYPublicaciones() { // Función para obtener la lista de usuarios y sus publicaciones, cruzar los datos y mostrar el resultado en consola como tabla
  try { // Usamos URLs reales de prueba para obtener usuarios y publicaciones desde JSONPlaceholder
    const [resUsers, resPosts] = await Promise.all([ // Realizamos ambas peticiones de forma concurrente para optimizar el tiempo de respuesta
      fetch('https://jsonplaceholder.typicode.com/users'), // La URL final para obtener usuarios será: .../users
      fetch('https://jsonplaceholder.typicode.com/posts') // La URL final para obtener publicaciones será: .../posts
    ]);

    // Validar si las peticiones fueron exitosas
    if (!resUsers.ok || !resPosts.ok) { //Si alguna de las respuestas no fue exitosa (código de estado diferente a 200), lanzamos un error con información sobre los códigos de estado de ambas peticiones para facilitar la depuración
      throw new Error(`Error HTTP: ${resUsers.status} / ${resPosts.status}`); // Mostramos un mensaje de error específico en la consola para facilitar la depuración en caso de que alguna de las peticiones falle por alguna razón (como problemas de red o errores en la API)
    }

    const users = await resUsers.json(); // Convertimos la respuesta de usuarios a formato JSON para obtener la lista de usuarios
    const posts = await resPosts.json(); // Convertimos la respuesta de publicaciones a formato JSON para obtener la lista de publicaciones

    // Crear el mapa de conteo
    const conteoPosts = posts.reduce((acc, post) => { //  Usamos reduce para crear un objeto que cuente la cantidad de publicaciones por cada userId, donde la clave es el userId y el valor es la cantidad de publicaciones asociadas a ese userId  
      acc[post.userId] = (acc[post.userId] || 0) + 1; // Para cada publicación, incrementamos el conteo correspondiente al userId de esa publicación. Si el userId aún no tiene un conteo, lo inicializamos en 0 antes de incrementarlo. Esto nos permitirá obtener la cantidad total de publicaciones para cada usuario de manera eficiente.
      return acc; // Devolvemos el acumulador actualizado en cada iteración para que reduce pueda seguir acumulando el conteo de publicaciones por userId a lo largo de todo el array de publicaciones
    }, {});

    // Cruzar los datos
    const resultado = users.map(user => ({ // Usamos map para crear un nuevo array de objetos donde cada objeto representa a un usuario con su nombre y la cantidad de publicaciones que tiene, cruzando los datos de usuarios y publicaciones usando el userId como referencia
      nombre: user.name, // El nombre del usuario que obtenemos del array de usuarios para mostrarlo en la tabla de resultados
      cantidadPublicaciones: conteoPosts[user.id] || 0 // La cantidad de publicaciones que tiene el usuario, que obtenemos del objeto conteoPosts usando el userId como clave. Si el userId no tiene un conteo (es decir, no tiene publicaciones), mostramos 0 en lugar de undefined para mayor claridad en la tabla de resultados
    }));

    // Mostrar en consola como tabla
    console.table(resultado); // Usamos console.table para mostrar el resultado de manera tabular en la consola, lo que facilita la visualización y comparación de los datos de cada usuario junto con la cantidad de publicaciones que tiene

    return resultado; // Devolvemos el resultado para su uso posterior si es necesario

  } catch (error) { // Si ocurre un error durante el proceso (como problemas de red o errores en la API), lo capturamos y mostramos un mensaje de error en la consola para facilitar la depuración  
    console.error("Error al procesar los datos:", error.message); // Mostramos un mensaje de error específico en la consola para facilitar la depuración en caso de que el proceso falle por alguna razón (como problemas de red o errores en la API)
  }
}

// Ejecutar
obtenerUsuariosYPublicaciones(); // Ejecutamos la función para obtener la lista de usuarios y sus publicaciones, cruzar los datos y mostrar el resultado en consola como tabla, lo que nos permitirá visualizar claramente la cantidad de publicaciones que tiene cada usuario de manera eficiente y organizada.