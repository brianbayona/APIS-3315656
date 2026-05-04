async function obtenerUsuariosYPublicaciones() {
  try {
    // Usamos URLs reales de prueba
    const [resUsers, resPosts] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users'),
      fetch('https://jsonplaceholder.typicode.com/posts')
    ]);

    // Validar si las peticiones fueron exitosas
    if (!resUsers.ok || !resPosts.ok) {
      throw new Error(`Error HTTP: ${resUsers.status} / ${resPosts.status}`);
    }

    const users = await resUsers.json();
    const posts = await resPosts.json();

    // Crear el mapa de conteo
    const conteoPosts = posts.reduce((acc, post) => {
      acc[post.userId] = (acc[post.userId] || 0) + 1;
      return acc;
    }, {});

    // Cruzar los datos
    const resultado = users.map(user => ({
      nombre: user.name,
      cantidadPublicaciones: conteoPosts[user.id] || 0
    }));

    // Mostrar en consola como tabla
    console.table(resultado);

    return resultado;

  } catch (error) {
    console.error("Error al procesar los datos:", error.message);
  }
}

// Ejecutar
obtenerUsuariosYPublicaciones();