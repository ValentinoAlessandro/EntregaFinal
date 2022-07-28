import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="portadacuenta">
      <div className="inicio_container">
      <h2>Inicia Sesion</h2>
      <form className='usu'>
      <label>Usuario:</label>
      <input type= "text" required/>
      <br></br>
      <br></br>
      <label>Contraseña:</label>
      <input type= "text" required/>
      </form>
      <button>Enter</button>
      <p><Link to = '/Crearcuenta' className="btn btn-primary">Crear cuenta</Link></p>
      </div>
    </div>
  );
};

const index = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default index;
