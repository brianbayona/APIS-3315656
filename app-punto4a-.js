fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    userId: 1,
    title: "Mi primer post",
    body: "Hola, soy principiante"
  })
})
  .then(res => res.json())
  .then(data => {
    console.log("Respuesta del servidor:");
    console.log(data);
  });
