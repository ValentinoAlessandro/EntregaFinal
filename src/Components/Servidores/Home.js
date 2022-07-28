import React, { useEffect, useState } from "react";
import axios from "axios";
function Home() {
  const [estudiante, setEstudiante] = useState("");
  const [data, setData] = useState({});

  const searchCharacter = () => {
    axios
      .get("localhost:4000/api/estudiantes/" + estudiante)
      .then((response) => {
        console.log(response);
        setData(response.data);
      });
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Plataforma Estudiantil</h1>
        <hr />
        <a href="/add">
          <button class="btn btn-danger btn-lg">
            <span class="fa fa-plus"></span> Agregar nuevo estudiante
          </button>
        </a>

        <a href="/all">
          <button class="btn btn-danger btn-lg">
            <span class="fa fa-th-list"></span> Todos los estudiantes
          </button>
        </a>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-header">
              <h3>
                <strong>Buscar Estudiante</strong>
              </h3>
            </div>
            <div className="card-body">
              <input
                type="text"
                id="character-search"
                className="form-control"
                value={estudiante}
                onChange={(e) => setEstudiante(e.target.value)}
              />
              <br />
              <div className="text-right">
                <button
                  className="btn btn-primary btn-md"
                  id="search-btn"
                  onClick={buscarEstudiante}
                >
                  <span className="fa fa-search"></span>
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3>
                <strong>Informacion de Estudiante</strong>
              </h3>
            </div>
            <div className="card-body">
              {data != false ? (
                <div>
                  <h2 id="name">{data.name}</h2>
                  <div id="stats">
                    <h3>
                      <strong>Ocupacion:</strong>{" "}
                      <span id="ocupacion">{data.ocupacion}</span>
                    </h3>
                    <h3>
                      <strong>Nombre:</strong>{" "}
                      <span id="nombre">{data.nombre}</span>
                    </h3>
                    <h3>
                      <strong>Carrera:</strong>{" "}
                      <span id="carrera">{data.carrera}</span>
                    </h3>
                    <h3>
                      <strong>Contacto:</strong>{" "}
                      <span id="contacto">{data.contacto}</span>
                    </h3>
                  </div>
                </div>
              ) : (
                <h2 id="name">Estudiante no encontrado</h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
