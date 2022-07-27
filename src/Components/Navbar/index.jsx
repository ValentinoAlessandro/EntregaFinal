import React from 'react';
import './navbar.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Calificaciones from '../Calificaciones';
import Cursos from '../Cursos';
import Horario from '../Horario';
import Perfil from '../Perfil';
import Home from '../Home';
import Inicio from '../Inicio';
import Materia1 from '../Materia1';
import Materia2 from '../Materia2';
import Materia3 from '../Materia3';
import Materia4 from '../Materia4';
import Iniciarsesion from '../Iniciarsesion';
import Crearcuenta from '../Crearcuenta';

const Links = [
  {
    id: 1,
    title: 'Calificaciones',
    link: '/Calificaciones',
  },
  {
    id: 2,
    title: 'Cursos',
    link: '/Cursos',
  },
  {
    id: 3,
    title: 'Horario',
    link: '/Horario',
  },
  {
    id: 4,
    title: 'Perfil',
    link: '/Perfil',
  },
  {
    id: 5,
    title: 'Cerrar sesion',
    link: '/Inicio',
  },
];


const Link2 = [
  {
    id: 6,
    title: 'Iniciarsesion',
    link: '/Iniciarsesion',
  },
  {
    id: 7,
    title: 'Crearcuenta',
    link: '/Crearcuenta',
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
        <Route path="/" element={<Home />} />
        <Route path="/Calificaciones" element={<Calificaciones />} />
        <Route path="/Materia1" element={<Materia1 />} />
        <Route path="/Materia2" element={<Materia2/>} />
        <Route path="/Materia3" element={<Materia3 />} />
        <Route path="/Materia4" element={<Materia4 />} />
        <Route path="/Cursos" element={<Cursos />} />
        <Route path="/Horario" element={<Horario />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/inicio" element={<Inicio />} />
      </Routes>
    </Router>
  );
};

const Header2= () => {
  return (
    <Router>
      <div className="super_container">
        <nav className="nav_container">
          <div>
            <Link to={'/'}>
              <h2 className="nav_title">Plataforma estudiantil</h2>
            </Link>
          </div>
          <div className="nav_menu_container">
            {Link2.map((l) => (
              <Link to={l.link}>
                <p key={l.id}>{l.title}</p>
              </Link>
            ))}
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Crearcuenta" element={<Crearcuenta />} />
        <Route path="/Iniciarsesion" element={<Iniciarsesion />} />
      </Routes>
    </Router>
  );
};

let acc = 1;

const index = () => {
  if (acc ==0){  return (
    <div>
      <Header />
    </div>
  );}

  if (acc ==1){  return (
    <div>
      <Header2 />
    </div>
  );}
};

export default index;