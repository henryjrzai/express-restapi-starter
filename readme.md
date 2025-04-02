# 🚀 **Express.js Starter Kit**
Express.js Starter Kit adalah boilerplate siap pakai untuk membangun REST API menggunakan Express.js. Starter ini dilengkapi dengan Prisma ORM, JWT Authentication, dan beberapa utilitas lain untuk mempercepat pengembangan backend.
<br><br>

## ✨ **Fitur**
✅ Express.js - Framework ringan dan cepat untuk backend.<br>
✅ Prisma ORM - Manajemen database modern dengan query yang intuitif.<br>
✅ JWT Authentication - Implementasi otentikasi berbasis token (login dan logout siap pakai).<br>
✅ Dotenv - Mengelola variabel lingkungan dengan mudah.<br>
✅ ESM Support - Menggunakan module system (import/export) secara native.<br>
<br>

## 📦 **Instalasi & Run Locally**
1. Buat folder project :
```bash
   mkdir your-project-name
   cd your-project-name
```
2. Clone repository :
```bash
    git clone https://github.com/henryjrzai/express-restapi-starter .
```
3. Install dependensi :
```bash
    npm install
```
4. Konfigurasi .env
```bash
    cp .env.example .env
```
5. buat database baru 
```sql
    CREATE DATABASE <database_baru>;
``` 
6. Setting konfigurasi database dan jwt pada file .env
```bash
    DATABASE_URL="<DBMS>://<username>:<password>@localhost:<port>/<nama-database>"
    JWT_SECRET="your_jwt_secret_key"
    JWT_EXPIRATION="1h"
    PORT=3000
```
7. Jalankan migrasi prisma
```bash
    npx prisma migrate dev --name init
``` 
8. Jalankan server
```bash
    npm start
``` 
<br>


## 🤖 **API Reference**

### 🔹 **Simple test**

```http
  GET http://localhost:3000/
```
♦️ Response
```json
{
    "message": "Welcome to express starter kit made with 💖 by henryjrzai🤖"
}
``` 
<br>

### 🔹**Registrasi Pengguna**
```http
  POST http://localhost:3000/api/signup
```
📌 Request Body
| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Nama pengguna.|
| `email`      | `string` | **Required**. Email pengguna.|
| `password`      | `string` | **Required**. Kata sandi pengguna.|

💡 Pastikan email yang digunakan unik dalam database.

♦️ Response
```json
{
    "status": "success",
    "message": "User created successfully",
    "data": {
        "id": 1,
        "email": "zaii@example.com",
        "name": "henryjrzai"
    }
}
```
<br>

### 🔹**Login**
```http
  POST http://localhost:3000/api/login
```
📌 Request Body
| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. Email pengguna.|
| `password`      | `string` | **Required**. Kata sandi pengguna.|

♦️ Response
```json
{
    "status": "success",
    "message": "Login successful",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTc0MzU5MzgxNSwiZXhwIjoxNzQzNTk3NDE1fQ.CHYfjub8oFmxXec9JvgilrjRCHG3Q2A0-4Tf7Nr5xrM"
}
```
<br>

### 🔹**Menampilkan seluruh data pengguna**
```http
  GET http://localhost:3000/api/users
```
📌 Request Header
| Authorization | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Bearer Token`      | `string` | **Required**. Token yang didapatkan ketika login.|

♦️ Response
```json
{
    "status": "success",
    "message": "Users retrieved successfully",
    "data": [
        {
            "id": 1,
            "name": "henryjrzai",
            "email": "zaii@example.com"
        }
    ]
}
```
<br>

### 🔹 **Logout**
```http
  POST http://localhost:3000/api/logout
```
📌 Request Header
| Authorization | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Bearer Token`      | `string` | **Required**. Token yang didapatkan ketika login.|

♦️ Response
```json
{
    "status": "success",
    "message": "Logged out successfully"
}
```

<br>

## 📚 **Dependensi**
- **express** `^5.1.0` - Framework web minimalis untuk Node.js
- **prisma** `^6.5.0` - Prisma CLI untuk migrasi dan manajemen skema
- **@prisma/client** `^6.5.0` - Prisma ORM client untuk interaksi dengan database
- **jsonwebtoken** `^9.0.2` - JSON Web Token untuk autentikasi
- **bcrypt** `^5.1.1` - Hashing password
- **cors** `^2.8.5` - Middleware untuk menangani CORS
- **dotenv** `^16.4.7` - Memuat variabel lingkungan dari file .env
- **helmet** `^8.1.0` - Middleware keamanan untuk header HTTP
- **nodemon** `^3.1.9` - Restart otomatis server selama pengembangan
<br><br>

## 🚀  **Mulai Penggunaan**
Gunakan starter kit ini untuk membangun API yang scalable dan mudah dikelola.

💡 Kontribusi & masukan sangat diapresiasi! 🎉
<br><br>


## 👨‍💻Authors
- [@henryjrzai](https://www.github.com/henryjrzai)

## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://www.henryjrzai.my.id/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/henryjrzai)
[![github](https://img.shields.io/badge/github-000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/henryjrzai)
