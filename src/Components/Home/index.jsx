import React from 'react';
const Header = () => {
  return (
    <div className="portada">
      <div className="portada_container">
        <div className="portada_aviso">
          <p>Avisos Importante</p>
          <p className="avisos_chicos">
           Inscripciones 25-26 Julio<br></br>
           Inicio de clases 8 Agosto<br></br>
           Asueto Septiembre 15 <br></br>
           
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
