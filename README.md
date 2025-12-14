
# 🛒 E‑Commerce App (React + Vite)

A fully responsive **E‑Commerce web application** built with **React + Vite**, featuring smooth animations, modern UI components, and real backend integration.  
The project uses **RTK Query** to fetch data from a Strapi backend, **Cloudinary** for image hosting, and **Firebase** for frontend deployment.  
Animations are powered by **Framer Motion**, and product sliders are implemented using **Swiper**.

---

## ✨ Features
- 🛍️ Dynamic product listing fetched from Strapi using RTK Query  
- 🖼️ High‑quality images served from Cloudinary CDN  
- 🎞️ Smooth animations using Framer Motion  
- 🌀 Interactive product sliders built with Swiper  
- 🛒 Add to cart / remove from cart  
- 🔍 Product details page with dynamic routing  
- 📱 Fully responsive design  
- 🚀 Frontend hosted on Firebase  
- ⚡ Fast performance thanks to Vite  

---

## 🛠️ Technologies & Libraries

### Frontend
- React + Vite  
- React Router  
- Redux Toolkit + RTK Query  
- Framer Motion  
- Swiper.js  
- Cloudinary (images)  
- Firebase Hosting  

### Backend
- Strapi CMS  
- Cloudinary plugin for media storage  

---

## 📦 Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/ramamalali/e-commerceProject-frontend
.git
cd frontend
### 2. Install dependencies
```bash
npm install
### 3. Run the development server
```bash
npm run dev
### 4. Build for production
```bash
npm run build

## 🔌 API & Backend Setup

This project uses Strapi as the backend.

Ensure your Strapi server is running

Products, categories, and images are fetched via RTK Query

Images are stored and served through Cloudinary

API URLs can be configured inside:
```bash
src/services/api.js

## 📂 Project Structure
ecommerce-app/
frontend/
│── public/
│── src/
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   ├── Header/
│   │   │   ├── DownHeader.jsx
│   │   │   ├── DownHeader.css
│   │   │   ├── MidHeader.jsx
│   │   │   ├── MidHeader.css
│   │   │   ├── Links.jsx
│   │   │   ├── TopHeader.jsx
│   │   │   └── TopHeader.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.css
│   │   ├── IconsSection/
│   │   │   └── IconsSection.jsx
│   │   └── MainContent/
│   │       ├── Main.jsx
│   │       ├── Main.css
│   │       └── ProductDetails.jsx
│   │   └── Scroll/
│   │       └── ScrolltoTop.jsx
│
│   ├── app/
│   │   └── store.js
│   
│   ├── services/
│   │   └── Product.jsx
│
│   ├── App.jsx
│   ├── main.jsx
│   ├── theme.jsx
│
│── package.json
│── README.md
─ README.md

### 🚀 Deployment
The project is deployed using Firebase Hosting:

```bash
firebase deploy

## 🌟 Demo
(https://e-commerce-78063.web.app/)

## 🧑‍💻 Developer
Developed by Rama Alali

This project is for training purposes. Please let me know if you have any feedback.


- Cloudinary (images)  
- Firebase Hosting
