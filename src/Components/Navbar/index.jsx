import React from 'react';
import './navbar.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Calificaciones from '../Calificaciones';
import Cursos from '../Cursos';
import Horario from '../Horario';
import Perfil from '../Perfil';
import Home from '../Home';
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
];

const index = () => {
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
        <Route path="/Cursos" element={<Cursos />} />
        <Route path="/Horario" element={<Horario />} />
        <Route path="/Perfil" element={<Perfil />} />
      </Routes>
    </Router>
  );
};

export default index;
