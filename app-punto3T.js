document.getElementById("btnBuscar").addEventListener("click", () => {
  const id = document.getElementById("idPost").value;

  if (id === "") {
    alert("Ingresa un ID");
    return;
  }

  // 1. Consultar la publicación específica
  fetch("https://jsonplaceholder.typicode.com/posts/" + id)
    .then(res => res.json())
    .then(post => {

      // Si no existe
      if (!post.id) {
        document.getElementById("resultado").innerHTML =
          "<p>No existe una publicación con ese ID.</p>";
        return;
      }

      // 2. Consultar comentarios de esa publicación
      fetch("https://jsonplaceholder.typicode.com/comments?postId=" + id)
        .then(res => res.json())
        .then(comments => {

          // 3. Mostrar resultado (igual estilo al Enunciado 2)
          document.getElementById("resultado").innerHTML = `
            <h3>${post.title}</h3>
            <p><strong>Contenido:</strong> ${post.body}</p>
            <p><strong>Número de comentarios:</strong> ${comments.length}</p>
            <hr>
          `;
        });
    });
});
