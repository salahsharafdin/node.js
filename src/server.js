import express from 'express';
const app = express();
const port = 8003;

// Middleware si Express u aqoonsado JSON body
app.use(express.json());

const users = [
    {id:1, name:"John Doe"},
    {id:2, name:"Jane Smith"},
    {id:3, name:"Bob Johnson"},
];

const products = [
    {id:1, name:"Laptop", price: 999.99},
    {id:2, name:"Smartphone", price: 499.99},
    {id:3, name:"Headphones", price: 199.99},
];

const orders = [
    {id:1, userId:1, productId:1, quantity: 1},
    {id:2, userId:2, productId:2, quantity: 2},
    {id:3, userId:3, productId:3, quantity: 3},
];



app.get('/users', (req, res) => {
  res.json(users);
});

// PUT endpoint: update garee user
app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);

  if (user) {
    // Magaca cusub ka qaad request body    
    const newName = req.body.name;

    if (!newName) {
      return res.status(400).json({ message: "Name is required" });
    }

    user.name = newName; // Update user-ka
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === userId);

  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.json({ message: "User deleted" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});


app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

//products endpoint
app.get('/products', (req, res) => {
  res.json(products);
});

app.post('/products', (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.delete('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const productIndex = products.findIndex(p => p.id === productId);

  if (productIndex !== -1) {
    products.splice(productIndex, 1);
    res.json({ message: "Product deleted" });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

app.put('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);

  if (product) {
    const newName = req.body.name;
    const newPrice = req.body.price;

    if (!newName || newPrice === undefined) {
      return res.status(400).json({ message: "Name and price are required" });
    }

    product.name = newName;
    product.price = newPrice;
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});


app.get('/orders', (req, res) => {
  res.json(orders);
});

app.post('/orders', (req, res) => {
  const newOrder = req.body;
  orders.push(newOrder);
  res.status(201).json(newOrder);
});

app.delete('/orders/:id', (req, res) => {
  const orderId = parseInt(req.params.id);
  const orderIndex = orders.findIndex(o => o.id === orderId);

  if (orderIndex !== -1) {
    orders.splice(orderIndex, 1);
    res.json({ message: "Order deleted" });
  } else {
    res.status(404).json({ message: "Order not found" });
  }
});

app.put('/orders/:id', (req, res) => {
  const orderId = parseInt(req.params.id);
  const order = orders.find(o => o.id === orderId);

  if (order) {
    const newQuantity = req.body.quantity;

    if (newQuantity === undefined) {
      return res.status(400).json({ message: "Quantity is required" });
    }

    order.quantity = newQuantity;
    res.json(order);
  } else {
    res.status(404).json({ message: "Order not found" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});