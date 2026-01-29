# 🛒 E-commerce Full Stack (React + Django REST)

Este proyecto es un **E-commerce Full Stack** desarrollado con **React** para el frontend y **Django + Django REST Framework** para el backend.

El objetivo principal es aplicar conceptos de **desarrollo web moderno**, separación de responsabilidades (**frontend / backend**) y consumo de **APIs REST**.

---

## 🚀 Tecnologías utilizadas

### Frontend
- ⚛️ React
- JavaScript (ES6+)
- HTML5
- CSS3
- Fetch API para consumir el backend

### Backend
- 🐍 Python
- Django
- Django REST Framework
- SQLite (base de datos por defecto, fácilmente reemplazable)

---

## 📂 Estructura del proyecto

E-commercer_end/
│
├── E-commerce_React/ # Frontend en React
├── E-commerce_Django/ # Backend con Django REST API
└── README.md # Documentación del proyecto

---

## 🧩 Funcionalidades implementadas

- Listado de productos
- Productos destacados
- Consumo de API REST desde React
- Backend desacoplado del frontend
- Estructura preparada para:
  - autenticación
  - carrito de compras
  - panel de administración

*(El proyecto sigue en desarrollo)* 🚧

---

## 🔌 Comunicación Frontend - Backend

El frontend en React consume los datos del backend mediante **endpoints REST**, por ejemplo:


El backend se encarga de:
- manejar la lógica de negocio
- exponer los datos en formato JSON

---

## ▶️ Cómo ejecutar el proyecto

### Backend (Django)
```bash
cd E-commerce_Django
python -m venv env
env\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

###  Frontend (React)

```bash
cd E-commerce_React
npm install
npm start
