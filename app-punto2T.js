function analizar() {

  // 1. Consultar publicaciones
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts => {

      // 2. Consultar comentarios
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then(res => res.json())
        .then(comments => {

          // 3. Relacionar y clasificar
          const resultado = posts.map(post => {
            const comentarios = comments.filter(c => c.postId === post.id);

            return {
              titulo: post.title,
              numeroComentarios: comentarios.length,
              estado: comentarios.length > 0 ? "Con comentarios" : "Sin comentarios"
            };
          });

          // 4. Mostrar en pantalla
          const div = document.getElementById("resultado");
          div.innerHTML = ""; // limpiar

          resultado.forEach(item => {
            div.innerHTML += `
              <p><strong>${item.titulo}</strong></p>
              <p>Comentarios: ${item.numeroComentarios}</p>
              <p>Estado: ${item.estado}</p>
              <hr>
            `;
          });

        });

    });

}
