/*import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Materia1 from '../Materia1';
import Materia2 from '../Materia2';
import Materia3 from '../Materia3';
import Materia4 from '../Materia4';*/

/*const Links = [
    {
      id: 1,
      title: 'Materia1',
      link: '/Materia1',
    },
    {
      id: 2,
      title: 'Materia1',
      link: '/Materia2',
    },
    {
      id: 3,
      title: 'Materia3',
      link: '/Materia3',
    },
    {
      id: 4,
      title: 'Materia4',
      link: '/Materia4',
    },
  ];

  const Header = () => {
    return (
      <Router>
        <div className="super_container">
          <nav className="nav_container">
            <div>
              <Link to={'/'}>
                <h2 className="nav_title">Plataforma Estudiantil</h2>
              </Link>
            </div>
            <div className="nav_menu_container">
              {Links.map((l) => (
                <Link to={l.link}>
                  <p key={l.id}>{l.title}</p>
                </Link>
              ))}
            </div>
          </nav>
        </div>
        <Routes>
          <Route path="/Materia1" element={<Materia1 />} />
          <Route path="/Materia2" element={<Materia2 />} />
          <Route path="/Materia3" element={<Materia3 />} />
          <Route path="/Materia4" element={<Materia4 />} />
        </Routes>
      </Router>
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


/* const Header = () => {
    return (
      <Router>
        <div className="portadacursos">
          <nav className="portada_container">
            <div>
              <Link to={'/'}>
                <h2 className="nav_title">Plataforma Estudiantil</h2>
              </Link>
            </div>
            <div className="nav_menu_container">
              {Links.map((l) => (
                <Link to={l.link}>
                  <p key={l.id}>{l.title}</p>
                </Link>
              ))}
            </div>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Calificaciones" element={<Calificaciones />} />
          <Route path="/Cursos" element={<Cursos />} />
          <Route path="/Horario" element={<Horario />} />
          <Route path="/Perfil" element={<Perfil />} />
        </Routes>
      </Router>
    );
  }; */

  



/*const Header = () => {
  return (
    <div className="portadacursos">
      <div className="portada_container">
        <div className="portada_aviso">
          <p>Tus Cursos</p>
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
}; */


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