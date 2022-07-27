import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="portadacursos">
      <div className="cursos_container">
        <h2>Cursos</h2>
        <p><Link to = '/Materia1' className="btn btn-primary">Materia1</Link><br></br>
        <Link to = '/Materia2' className="btn btn-primary">Materia2</Link><br></br>
        <Link to = '/Materia3' className="btn btn-primary">Materia3</Link><br></br>
        <Link to = '/Materia4' className="btn btn-primary">Materia4</Link><br></br>
          </p>
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