import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Aquí puedes realizar la lógica de autenticación, por ejemplo, una llamada a la API
    // Si la autenticación es exitosa, navega a la ruta '/home'
    // De lo contrario, muestra un mensaje de error o realiza otras acciones según tu aplicación
    // Ejemplo:
    if (username === 'agresor' && password === 'agresor') {
      navigate('/home');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className=".login">
      <h1>Login Agresor</h1>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Ingresar
        </button>
      </form>
    </div>
  );
}

export default Login;