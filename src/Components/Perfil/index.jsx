import React from 'react';

let ocupacion = " "
let nombre = " "
let carrera = " "
let contacto = " "

const Header = () => {
  return (
    <div className="portadaperfil">
      <div className="portada_container_perfil">
      <p className="texto"><div className="al"></div>ocupacion: {ocupacion}<br></br>
        nombre: {nombre}<br></br>
        carrera: {carrera}<br></br>
        contacto: {contacto}<br></br></p>
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
