import React, { useState } from 'react';

const RegistroUsuario = () => {
  const [usuario, setUsuario] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleRegistro = () => {
   
  };

  return (
    <div className="container mt-5">
      <h2>Registro de Usuario</h2>
      <form>
        <div className="form-group">
          <label htmlFor="usuario">Nombre de Usuario</label>
          <input
            type="text"
            className="form-control"
            id="usuario"
            placeholder="Ingrese su nombre de usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="correo">Correo Electrónico</label>
          <input
            type="email"
            className="form-control"
            id="correo"
            placeholder="Ingrese su correo electrónico"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contrasena">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="contrasena"
            placeholder="Ingrese su contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleRegistro}
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default RegistroUsuario;
