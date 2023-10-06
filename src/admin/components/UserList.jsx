import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function UserList() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Lista de Usuarios</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo Electrónico</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Usuario 1</td>
            <td>usuario1@example.com</td>
            <td>
              <button className="btn btn-primary mr-2">Editar</button>
              <button className="btn btn-danger">Eliminar</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Usuario 2</td>
            <td>usuario2@example.com</td>
            <td>
              <button className="btn btn-primary mr-2">Editar</button>
              <button className="btn btn-danger">Eliminar</button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <button className="btn btn-success">Agregar</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default UserList;
