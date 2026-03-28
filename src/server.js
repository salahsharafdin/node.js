import express from 'express';

//users
const users = [
    {id:1, name:"John Doe"},
    {id:2, name:"Jane Smith"},
    {id:3, name:"Bob Johnson"},
];

//prducts
const products = [
    {id:1, name:"Product 1", price: 10.99},
    {id:2, name:"Product 2", price: 19.99},
    {id:3, name:"Product 3", price: 5.99},
];

//register
const register = [
    {id:1, name: "Register 1",},
    {id:2, name: "Register 2",},
    {id:3, name: "Register 3",},
];


const app = express();
const port = 8003;

app.get('/', (req,res) =>{
    res.send("hello world");
});

//users endpoint 1

app.get('/users', (req,res) =>{
    res.send(users);
});

app.get('/users/:id', (req,res) =>{
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if(user){
        res.send(user); 
    } else {
        res.status(404).send({error: "User not found"})
    }
});


app.put('/users/:id', (req,res) =>{
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === userId);
    if(userIndex !== -1){
        users[userIndex].name = "updated user";
        res.send(users[userIndex]);
    } else {
        res.status(404).send({error: "User not found"});
    }
});

app.delete('/users/:id', (req,res) =>{
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === userId);
    if(userIndex !== -1){
        users.splice(userIndex, 1);
        res.send({message: "User deleted"});
    } else {
        res.status(404).send({error: "User not found"});
    }
});

app.post('/users', (req,res) =>{
    const newUser = {
        id: users.length + 1,
        name: `User ${users.length + 1}`,
    };
    users.push(newUser);
    res.status(201).send(newUser);
});


//products endponit 2
app.get('/products', (req,res) =>{
    res.send(products);
});

app.get('/products/:id', (req,res) =>{
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);
    if(product){
        res.send(product); 
    } else {
        res.status(404).send({error: "Product not found"})
    }
});

app.put('/products/:id', (req,res) =>{
    const productId = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === productId);
    if(productIndex !== -1){
        products[productIndex].name = "updated product";
        res.send(products[productIndex]);
    } else {
        res.status(404).send({error: "Product not found"});
    }
});

app.delete('/products/:id', (req,res) =>{
    const productId = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === productId);
    if(productIndex !== -1){
        products.splice(productIndex, 1);
        res.send({message: "Product deleted"});
    } else {
        res.status(404).send({error: "Product not found"});
    }
});

app.post('/products', (req,res) =>{
    const newProduct = {
        id: products.length + 1,
        name: `Product ${products.length + 1}`,
        price: 0.00
    };
    products.push(newProduct);
    res.status(201).send(newProduct);
});

//register endpoint 3
app.get('/register', (req,res) =>{
    res.send(register);
});

app.get('/register/:id', (req,res) =>{
    const registerId = parseInt(req.params.id);
    const reg = register.find(r => r.id === registerId);
    if(reg){
        res.send(reg); 
    } else {
        res.status(404).send({error: "Register not found"})
    }
});

app.put('/register/:id', (req,res) =>{
    const registerId = parseInt(req.params.id);
    const registerIndex = register.findIndex(r => r.id === registerId);
    if(registerIndex !== -1){
        register[registerIndex].name = "updated register";
        res.send(register[registerIndex]);
    } else {
        res.status(404).send({error: "Register not found"});
    }
});

app.delete('/register/:id', (req,res) =>{
    const registerId = parseInt(req.params.id);
    const registerIndex = register.findIndex(r => r.id === registerId);
    if(registerIndex !== -1){
        register.splice(registerIndex, 1);
        res.send({message: "Register deleted"});
    } else {
        res.status(404).send({error: "Register not found"});
    }
});

app.post('/register', (req,res) =>{
    const newRegister = {
        id: register.length + 1,
        name: `Register ${register.length + 1}`,
    };
    register.push(newRegister);
    res.status(201).send(newRegister);
});


app.listen(port,()=>{
    console.log(`server is runnig on http://localhost:${port}`);
});

