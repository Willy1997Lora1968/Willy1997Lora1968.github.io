import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Comentarios = () => {
  return (
    <div className="container mt-5">
      <h3>Deje su idea</h3>
      <form>
        <div className="form-group">
          <label for="comment">Requerida:</label>
          <textarea className="form-control" id="comment" rows="3"></textarea>
        </div><br/>
        <div className="form-group">
          <label for="name">Su Nombre:</label>
          <input type="name" className="form-control" id="name" />
        </div><br/>
        <div className="form-group">
          <label for="email">Correo Electrónico:</label>
          <input type="email" className="form-control" id="email" />
        </div><br/>
        <div className="form-group">
          <label for="date">Fecha del comentario:</label>
          <input type="date" className="form-control" id="date" />
        </div><br/>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
};

export default Comentarios;
