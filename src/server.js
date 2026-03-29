import express from 'express';

const app = express();
const port = 8007;

// 💡 Middleware for JSON body
app.use(express.json());

// ===================
// DUMMY DATA
// ===================

// Users
const users = [
  { id: 1, name: "John Doe", email: "john@example.com", password: "123456" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", password: "123456" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", password: "123456" },
];

// Products
const products = [
  { id: 1, name: "Product 1", price: 10.99 },
  { id: 2, name: "Product 2", price: 19.99 },
  { id: 3, name: "Product 3", price: 5.99 },
];

// Comments
const comments = [
  { id: 1, text: "This is a comment" },
  { id: 2, text: "This is another comment" },
  { id: 3, text: "This is yet another comment" },
];

// ===================
// ROOT
// ===================
app.get('/', (req, res) => res.send("hello world"));

// ===================
// USERS CRUD
// ===================
app.get('/users', (req, res) => res.send(users));

app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  user ? res.send(user) : res.status(404).send({ error: "User not found" });
});

app.post('/users', (req, res) => {
  const { name, email, password } = req.body;
  const newUser = {
    id: users.length + 1,
    name: name || `User ${users.length + 1}`,
    email: email || "",
    password: password || ""
  };
  users.push(newUser);
  res.status(201).send(newUser);
});

app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.password = req.body.password || user.password;
    res.send(user);
  } else res.status(404).send({ error: "User not found" });
});

app.delete('/users/:id', (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index !== -1) {
    users.splice(index, 1);
    res.send({ message: "User deleted" });
  } else res.status(404).send({ error: "User not found" });
});

// ===================
// PRODUCTS CRUD
// ===================
app.get('/products', (req, res) => res.send(products));

app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  product ? res.send(product) : res.status(404).send({ error: "Product not found" });
});

app.post('/products', (req, res) => {
  const { name, price } = req.body;
  const newProduct = {
    id: products.length + 1,
    name: name || `Product ${products.length + 1}`,
    price: price || 0
  };
  products.push(newProduct);
  res.status(201).send(newProduct);
});

app.put('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (product) {
    product.name = req.body.name || product.name;
    product.price = req.body.price || product.price;
    res.send(product);
  } else res.status(404).send({ error: "Product not found" });
});

app.delete('/products/:id', (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index !== -1) {
    products.splice(index, 1);
    res.send({ message: "Product deleted" });
  } else res.status(404).send({ error: "Product not found" });
});

// ===================
// COMMENTS CRUD
// ===================
app.get('/comments', (req, res) => res.send(comments));

app.get('/comments/:id', (req, res) => {
  const comment = comments.find(c => c.id === parseInt(req.params.id));
  comment ? res.send(comment) : res.status(404).send({ error: "Comment not found" });
});

app.post('/comments', (req, res) => {
  const { text } = req.body;
  const newComment = { id: comments.length + 1, text: text || `Comment ${comments.length + 1}` };
  comments.push(newComment);
  res.status(201).send(newComment);
});

app.put('/comments/:id', (req, res) => {
  const comment = comments.find(c => c.id === parseInt(req.params.id));
  if (comment) {
    comment.text = req.body.text || comment.text;
    res.send(comment);
  } else res.status(404).send({ error: "Comment not found" });
});

app.delete('/comments/:id', (req, res) => {
  const index = comments.findIndex(c => c.id === parseInt(req.params.id));
  if (index !== -1) {
    comments.splice(index, 1);
    res.send({ message: "Comment deleted" });
  } else res.status(404).send({ error: "Comment not found" });
});

// ===================
// START SERVER
// ===================
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});