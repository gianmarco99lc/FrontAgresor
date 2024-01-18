import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, CircularProgress } from "@mui/material";
import { AuthContext } from '../contexts/auth/auth.context';
import axios from "axios";

const Login = () => {

  const { authState, setAuthentication } = useContext(AuthContext);

  const [form, setForm] = useState({username: "", password: ""})

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const response = await axios.get(`api/usuarios/username/${form.username}`);

      const user = response.data.response;
      console.log(response.data);
      console.log(user.usuarioTypeDto.id);

      if (form.username === user._Username && form.password === user._Password && user.usuarioTypeDto.id === 1){
        setAuthentication({type: "authenticate", payload: user});
      }

      else
        alert("Credenciales incorrectas");

    }catch(error){
      console.log(error);
      alert("Error interno.");
    } finally{
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setForm( prev => ({...prev, [e.target.name]: e.target.value}) );
  }

  return (
    <div className="login">
      <form className="form-content" onSubmit={handleLogin}>
        <h1>Login</h1>
        <TextField
          name="username"
          label="Username"
          type="text"
          value={form.username}
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          value={form.password}
          variant="outlined"
          onChange={handleChange}
        />
          {
            isLoading ? <CircularProgress /> :
            <Button type="submit" variant="contained" style={{width: "100%"}}>
              Ingresar
            </Button>
          }
      </form>
    </div>
  );
}

export default Login;
