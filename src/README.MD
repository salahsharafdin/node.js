# 🚀 Simple Express API (Users, Products, Register)

Kani waa **REST API** fudud oo lagu dhisay Node.js iyo Express, kaas oo maamula:

* 👤 Users
* 🛍️ Products
* 🧾 Register

Dhammaan data-da waxaa lagu kaydiyaa **memory (arrays)**, sidaas darteed database lama isticmaalin.

---

## 🛠️ Technologies

* Node.js
* Express.js

---

## ▶️ Sida loo ordo project-ka

### 1. Install dependencies

```bash
npm install
```

### 2. Run server

```bash
node server.js
```

Server-ku wuxuu ka shaqeyn doonaa:

```
http://localhost:8003
```

---

## 🌐 Base URL

```
http://localhost:8003
```

---

## 📌 Endpoints

---

## 👤 Users API

### GET /users

→ Hel dhammaan users

### GET /users/:id

→ Hel user gaar ah

### POST /users

→ Ku dar user cusub

### PUT /users/:id

→ Update user

### DELETE /users/:id

→ Delete user

---

## 🛍️ Products API

### GET /products

→ Hel dhammaan products

### GET /products/:id

→ Hel product gaar ah

### POST /products

→ Ku dar product cusub

### PUT /products/:id

→ Update product

### DELETE /products/:id

→ Delete product

---

## 🧾 Register API

### GET /register

→ Hel dhammaan register

### GET /register/:id

→ Hel register gaar ah

### POST /register

→ Ku dar register cusub

### PUT /register/:id

→ Update register

### DELETE /register/:id

→ Delete register

---

## 📊 Status Codes

* **200 → OK**
* **201 → Created**
* **400 → Bad Request**
* **404 → Not Found**
* **500 → Server Error**

---

## 🧪 Testing

Waxaad isticmaali kartaa:

* Postman
* Thunder Client (VS Code)

---

## 📌 Example Response

```json
{
  "id": 1,
  "name": "John Doe"
}
```

---

## ⚠️ Important Notes

* Data waxaa lagu kaydiyaa **arrays**, marka server-ka la restart gareeyo waa lumiyaa
* Ma jiro authentication (login / signup)
* Update endpoints waxay isticmaalaan values static ah (hardcoded)

---

## 👨‍💻 Author

Salah

---

## 📄 License

MIT License