import express, { text } from 'express';

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


//comment

const comments = [
    {id:1, text: "This is a comment", userId: 1},
    {id:2, text: "This is another comment", userId: 2},
    {id:3, text: "This is yet another comment", userId: 3},
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

//get user by id
app.get('/users/:id', (req,res) =>{
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if(user){
        res.send(user); 
    } else {
        res.status(404).send({error: "User not found"})
    }
});


//update user by id
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

//delete user by id
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

//create new user
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

//get product by id
app.get('/products/:id', (req,res) =>{
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);
    if(product){
        res.send(product); 
    } else {
        res.status(404).send({error: "Product not found"})
    }
});

//update product by id
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


//delete product by id
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

//create new product
app.post('/products', (req,res) =>{
    const newProduct = {
        id: products.length + 1,
        name: `Product ${products.length + 1}`,
        price: 0.00
    };
    products.push(newProduct);
    res.status(201).send(newProduct);
});



//comment endpoint 4
app.get('/comments', (req,res) =>{
    res.send(comments);
});

//get comment by id
app.get('/comments/:id', (req,res) =>{
    const commentId = parseInt(req.params.id);
    const comment = comments.find(c => c.id === commentId);
    if(comment){
        res.send(comment);
    } else {
        res.status(404).send({error: "Comment not found"});
    }
});

//update comment by id
app.put('/comments/:id', (req,res) =>{
    const commentId = parseInt(req.params.id);
    const commentIndex = comments.findIndex(c => c.id === commentId);
    if(commentIndex !== -1){
        comments[commentIndex].text = "updated comments";
        res.send(comments[commentIndex]);
    } else {
        res.status(404).send({error: "Comment not found"});
    }
});

//delete comment by id
app.delete('/comments/:id', (req,res) =>{
    const commentId = parseInt(req.params.id);
    const commentIndex = comments.findIndex(c => c.id === commentId);
    if(commentIndex !== -1){
        comments.splice(commentIndex, 1);
        res.send({message: "Comment deleted"});
    } else {
        res.status(404).send({error: "Comment not found"});
    }
});

//create new comment
app.post('/comments', (req,res) =>{
    const newComment = {
        id: comments.length + 1,
        text: `comments ${comments.length + 1}`,
        text: `comments ${comments.length + 1}`,
    };
    comments.push(newComment);
    res.status(201).send(newComment);
});


app.listen(port,()=>{
    console.log(`server is runnig on http://localhost:${port}`);
});

