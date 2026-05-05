const express = require('express');
const app = express();

app.use(express.json());

// "Base de datos" simulada
let posts = [
  { id: 1, title: "Post 1", body: "Contenido 1" },
  { id: 2, title: "Post 2", body: "Contenido 2" }
];


// 🔹 GET (por si tus compañeros lo usan)
app.get('/posts', (req, res) => {
  res.json(posts);
});


// 🔹 POST (crear)
app.post('/posts', (req, res) => {
  const nuevo = req.body;
  posts.push(nuevo);
  res.json({ mensaje: "Post creado", data: nuevo });
});


// 🔹 PUT (reemplaza todo)
app.put('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);

  posts = posts.map(p =>
    p.id === id ? req.body : p
  );

  res.json({ mensaje: "Post actualizado completamente" });
});


// 🔹 PATCH (modifica una parte)
app.patch('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);

  posts = posts.map(p =>
    p.id === id ? { ...p, ...req.body } : p
  );

  res.json({ mensaje: "Post actualizado parcialmente" });
});


// 🔹 DELETE (eliminar)
app.delete('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);

  posts = posts.filter(p => p.id !== id);

  res.json({ mensaje: "Post eliminado" });
});


// 🚀 levantar servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});