import React from 'react';

const Header = () => {
  return (
    <div className="portada">
      <div className="portada_container">
      <h1>Inicio</h1>
        <div className="portada_aviso">
          <p>Inicio</p>
          <p className="avisos_chicos">
           Inicio<br></br>
          </p>
        </div>
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