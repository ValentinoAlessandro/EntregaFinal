import React, { useState } from "react";
import axios from "axios";

function Add() {
  const [ocupacion, setOcupacion] = useState("");
  const [nombre, setNombre] = useState("");
  const [carrera, setCarrera] = useState("");
  const [contacto, setContacto] = useState("");

  const nameChangeHandler = (e) => {
    setOcupacion(e.target.value);
  };

  const roleChangeHandler = (e) => {
    setNombre(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setCarrera(e.target.value);
  };

  const fpChangeHandler = (e) => {
    setContacto(e.target.value);
  };

  const agregarEstudiante = () => {
    const nuevoEstudiante = {
      ocupacion: ocupacion,
      nombre: nombre,
      carrera: carrera,
      contacto: contacto,
    };

    axios
      .post("localhost4000/api/estudiantes/", nuevoEstudiante)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
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
        <a href="/all">
          <button className="btn btn-danger btn-lg">
            <span className="fa fa-th-list"></span> Todos los estudiantes
          </button>
        </a>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">Agregar estudiante</div>
            <div className="card-body">
              <form role="form">
                <div className="form-group">
                  <label htmlFor="ocupacion">ocupacion</label>
                  <input
                    type="text"
                    className="form-control"
                    id="ocupacion"
                    value={ocupacion}
                    onChange={ocupacionChangeHandler}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="nombre">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    value={nombre}
                    onChange={nombreChangeHandler}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="carrera">Carrera</label>
                  <input
                    type="text"
                    className="form-control"
                    id="carrera"
                    value={carrera}
                    onChange={carreraChangeHandler}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contacto">contacto</label>
                  <input
                    type="text"
                    className="form-control"
                    id="contacto"
                    value={contacto}
                    onChange={contactoChangeHandler}
                  />
                </div>
              </form>
              <br />
              <div className="text-right">
                <button
                  className="btn btn-primary btn-md"
                  id="add-btn"
                  onClick={agregarEstudiante}
                >
                  <span className="fa fa-fire"></span> Agregar estudiante
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;
