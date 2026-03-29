🚀 Simple Express API (Users, Products, Orders)

Kani waa REST API fudud oo lagu dhisay Node.js iyo Express, kaas oo maamula:

👤 Users
🛍️ Products
📝 Orders

Dhammaan data-da waxaa lagu kaydiyaa memory (arrays), sidaas darteed database lama isticmaalin.

🛠️ Technologies
Node.js
Express.js
▶️ Sida loo run gareeyo project-ka
1. Install dependencies
npm install
2. Run server
node index.js

Server-ku wuxuu ka shaqeyn doonaa:

http://localhost:8003
🌐 Base URL
http://localhost:8003
📌 Endpoints
👤 Users API
GET /users

→ Hel dhammaan users

GET /users/:id

→ Hel user gaar ah

POST /users

→ Ku dar user cusub

PUT /users/:id

→ Update user

DELETE /users/:id

→ Delete user

🛍️ Products API
GET /products

→ Hel dhammaan products

GET /products/:id

→ Hel product gaar ah

POST /products

→ Ku dar product cusub

PUT /products/:id

→ Update product

DELETE /products/:id

→ Delete product

📝 Orders API
GET /orders

→ Hel dhammaan orders

GET /orders/:id

→ Hel order gaar ah

POST /orders

→ Ku dar order cusub

PUT /orders/:id

→ Update order quantity

DELETE /orders/:id

→ Delete order

📊 Status Codes
200 → OK
201 → Created
400 → Bad Request
404 → Not Found
500 → Server Error
🧪 Testing

Waxaad isticmaali kartaa:

Postman
Thunder Client (VS Code)
📌 Example Response

User Example:

{
  "id": 1,
  "name": "John Doe"
}

Product Example:

{
  "id": 1,
  "name": "Laptop",
  "price": 999.99
}

Order Example:

{
  "id": 1,
  "userId": 1,
  "productId": 1,
  "quantity": 1
}
⚠️ Important Notes
Data waxaa lagu kaydiyaa arrays, marka server-ka la restart gareeyo waa lumiyaa
Ma jiro authentication (login / signup)
Update endpoints waxay isticmaalaan values static ah (hardcoded)
👨‍💻 Author

Salah Sharafdin

📄 License

MIT License