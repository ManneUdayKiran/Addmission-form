
# 🎓 Express Admission Portal

A simple admissions form built using **Express.js** and **HTML/CSS**. Students can fill out their full name, email, phone number, and choose a course. Submitted applications are temporarily stored in memory, and a confirmation message is displayed upon submission.

---
## Screenshots

![image](https://github.com/user-attachments/assets/565910a3-375e-4a4c-afdc-3406c9547f9e)

![image](https://github.com/user-attachments/assets/eeb11869-d45a-4ef6-bc6b-6c78b28b14fa)


![image](https://github.com/user-attachments/assets/c50dc514-8d06-4377-b19b-971f0c2b48e1)




## 🚀 Live Preview (Run Locally)

> Developed by [ManneUdayKiran](https://github.com/ManneUdayKiran)

### 🛠 Features

- Express.js backend
- HTML form served at `/admission`
- POST request handling and temporary in-memory storage
- Custom confirmation page per submission
- Clean and responsive form layout

---

## 📁 Project Structure

```

express-admission/
├── public/
│   └── styles.css
├── views/
│   └── Addmission-Form.html
├── server.js
└── package.json

````

---

## 💻 How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/ManneUdayKiran/express-admission-portal.git
cd Admission-Form
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Server

```bash
node server.js
```

### 4. Open in Browser

Visit: [http://localhost:3000/admission](http://localhost:3000/admission)

---

## 🧪 Sample Test

Fill out the form with:

* Name: Uday Kiran
* Email: [uday@example.com](mailto:uday@example.com)
* Phone: 9876543210
* Course: Computer Science

You should see:

> "Thank you, Uday Kiran! You’ve successfully applied for the Computer Science program."

---

## 📝 License

MIT License. Feel free to fork and use for learning or internal college projects!

```

