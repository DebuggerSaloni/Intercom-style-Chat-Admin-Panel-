# 💬 BeyondChats - Intercom-style Chat Admin Panel (Frontend Assignment)

This project is a frontend-only clone of **Intercom's chat admin panel**, built as part of the BeyondChats internship assignment.

It replicates core UI/UX from the provided demo, including:
- Sidebar with user list and filters
- Real-time message area with emoji support
- Simulated admin replies with typing animation
- Smooth transitions and mobile responsiveness

---


## 🛠️ Tech Stack

- React.js (Create React App)
- JavaScript (ES6+)
- **CSS (No frameworks used)**
- [emoji-picker-react](https://www.npmjs.com/package/emoji-picker-react)

---

## 🧩 Features Implemented

### ✅ UI/UX
- Clean Intercom-style two-panel layout
- Filter buttons: All / Active / Waiting / Resolved
- Highlight selected chat user

### ✅ Messaging
- Dummy chat data per user
- Message timestamps
- "Sent" ✓ status icon
- Simulated admin replies
- Typing animation (`...`)

### ✅ Input
- Emoji picker (via `emoji-picker-react`)
- Enter to send
- Send button with hover effect

### ✅ Animations & Responsiveness
- Typing bounce animation
- Smooth fade-in for new messages
- Fully mobile responsive layout

---

## 📦 How to Run Locally

### 1. Clone the repo


cd intercom-clone

2. Install dependencies

npm install

3. Start the dev server

npm start

📁 Folder Structure

src/
├── components/
│   ├── Sidebar.js
│   ├── ChatMessage.js
│   └── Main.js
├── styles/
│   ├── Sidebar.css
│   ├── ChatMessage.css
│   └── Main.css
├── App.js
└── index.js
