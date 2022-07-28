import React from 'react';

const Header = () => {
  return (
    <div className="portadacuenta">
      <div className="inicio_container">
      <h2>Nueva cuenta</h2>
      <form className='usu'>
      <label>Ocupacion:</label>
      <input type= "text" required/>
      <br></br>
      <br></br>
      <label>Nombre:</label>
      <input type= "text" required/>
      <br></br>
      <br></br>
      <label>Carrera:</label>
      <input type= "text" required/>
      <br></br>
      <br></br>
      <label>Contacto:</label>
      <input type= "text" required/>
      </form>
      <button>Enter</button>
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
