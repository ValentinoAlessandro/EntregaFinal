import React, { useEffect, useState } from "react";
import axios from "axios";

function All() {
  useEffect(() => {
    getTodosEstudiantes();
  }, []);

  const [data, setData] = useState([]);

  const getTodosEstudiantes = () => {
    axios.get("localhost4000/api/estudiantes").then((response) => {
      console.log(response);
      setData(response.data);
    });
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Plataforma Estudiantil</h1>
        <hr />
        <a href="/">
          <button className="btn btn-danger btn-lg">
            <span className="fa fa-eye"></span> Buscar estudiantes
          </button>
        </a>
        <a href="/add">
          <button className="btn btn-danger btn-lg">
            <span className="fa fa-plus"></span> Agregar nuevo estudiante
          </button>
        </a>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <strong>Estudiantes</strong>
            </div>
            <div className="card-body">
              <ul id="character-section" className="list-group"></ul>

              {data.map((info) => {
                return (
                  <li className="list-group-item" key={info.nombre}>
                    <h2>Ocupacion: {info.ocupacion}</h2>
                    <h3>Nombre: {info.nombre}</h3>
                    <h3>Carrera: {info.carrera}</h3>
                    <h3>Contacto: {info.contacto}</h3>
                    <hr />
                  </li>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default All;
