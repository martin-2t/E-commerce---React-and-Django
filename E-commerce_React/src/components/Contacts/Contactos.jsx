import { useState } from "react";
import "./Contactos.css"; // Opcional, para estilos propios

function Contactos() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [status, setStatus] = useState(""); // "" | "success" | "error"

  // Maneja cambios en los inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Envía los datos al backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8000/api/contacto/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Error al enviar mensaje");

      setStatus("success");
      setFormData({ nombre: "", email: "", mensaje: "" }); // limpiar formulario
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="contactos-container">
      <h2>Contacto</h2>
      <p>Escribinos tu consulta y te responderemos a la brevedad.</p>

      <form onSubmit={handleSubmit} className="contactos-form">
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Tu email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="mensaje"
          placeholder="Tu mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Enviar</button>
      </form>

      {status === "success" && <p className="success">Mensaje enviado correctamente!</p>}
      {status === "error" && <p className="error">Error al enviar el mensaje. Intenta de nuevo.</p>}
    </div>
  );
}

export default Contactos;
