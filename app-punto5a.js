fetch("https://jsonplaceholder.typicode.com/comments", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    postId: 1, 
    name: "Comentario de Stiven",
    email: "stiven@example.com",
    body: "Este es mi comentario de prueba"
  })
})
  .then(res => res.json())
  .then(data => {
    console.log("Comentario creado:");
    console.log(data);
  });
