# 🏥 Healthcare Appointment Booking App (MERN Stack)

A full-stack Healthcare Appointment Booking Application built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. This platform allows patients to book appointments with doctors, manage schedules, and provides an admin panel for system management.

---

## 🚀 Features

### 👨‍⚕️ Patient Features

* User Registration & Login (JWT Authentication)
* Browse Doctors by specialization
* Book & manage appointments
* View appointment history
* Secure profile management

### 🩺 Doctor Features

* Doctor profile creation
* Manage availability & schedule
* View upcoming appointments
* Update appointment status

### 🛠️ Admin Features

* Manage users (patients & doctors)
* Approve/reject doctor registrations
* View all appointments
* Dashboard with system insights

---

## 🧑‍💻 Tech Stack

### Frontend

* React.js
* Redux Toolkit (State Management)
* React Router
* Bootstrap / CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB (Mongoose ODM)

### Authentication

* JSON Web Token (JWT)

---

## 📂 Project Structure

```
/client         → React frontend
/server         → Node.js backend
  /controllers  → API logic
  /models       → Database schemas
  /routes       → API routes
  /middlewares  → Auth & error handling
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/healthcare-app.git
cd healthcare-app
```

### 2️⃣ Setup Backend

```bash
cd server
npm install
npm run dev
```

### 3️⃣ Setup Frontend

```bash
cd client
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file in the `/server` directory and add:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 🔗 API Endpoints (Sample)

### Auth Routes

* `POST /api/v1/user/register`
* `POST /api/v1/user/login`

### Doctor Routes

* `GET /api/v1/doctor/all`
* `POST /api/v1/doctor/create`

### Appointment Routes

* `POST /api/v1/appointment/book`
* `GET /api/v1/appointment/user`

---

## 📸 Screenshots (Optional)

* Add UI screenshots here for better presentation

---

## 🧪 Future Enhancements

* Online video consultation
* Payment gateway integration
* Notifications (Email/SMS)
* AI-based doctor recommendations

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 📬 Contact

For any queries or suggestions:

* Email: [your-email@example.com](mailto:your-email@example.com)
* GitHub: https://github.com/your-username

---

⭐ **If you like this project, don't forget to give it a star!**
