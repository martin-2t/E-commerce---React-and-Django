
import { useState } from "react";
import "./Login.css"; // 👈 IMPORTANTE

function Login() {
  const [usuario, establecerUsuario] = useState("");
  const [contrasena, establecerContrasena] = useState("");


  const enviarForm  = async (evento) => {
    evento.preventDefault();

    try {
      const busquedaUsuario  = await fetch("/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
           username: usuario,
           password: contrasena,
        }),
      });

      if (!busquedaUsuario.ok) {
        throw new Error("Usuario o contraseña incorrectos");
      }

      const data = await busquedaUsuario.json();
      console.log("Login OK:", data);
      alert("Login exitoso");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form className="login-form" onSubmit={enviarForm }>
      <h2 className="login-title">Iniciar sesión</h2>

      <input
        className="login-input"
        type="text"
        placeholder="Usuario"
        value={usuario}
        onChange={(e) => establecerUsuario(e.target.value)}
      />

      <input
        className="login-input"
        type="password"
        placeholder="Contraseña"
        value={contrasena}
        onChange={(e) => establecerContrasena(e.target.value)}
      />

      
      <button className="header-login" type="submit">
        Entrar
      </button>
    </form>
  );
}

export default Login;
