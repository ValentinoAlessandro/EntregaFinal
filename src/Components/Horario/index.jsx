import React from 'react';

const data = [
  { hora: "7am-8am", lunes: " ", martes: " ", miercoles: " ", jueves: " ", viernes: " "},
  { hora: "8am-9am", lunes: " ", martes: " ", miercoles: " ", jueves: " ", viernes: " "},
  { hora: "9am-10am", lunes: " ", martes: " ", miercoles: " ", jueves: " ", viernes: " "},
  { hora: "10am-11am", lunes: " ", martes: " ", miercoles: " ", jueves: " ", viernes: " "},
  { hora: "11am-12pm", lunes: " ", martes: " ", miercoles: " ", jueves: " ", viernes: " "},
  { hora: "1pm-2pm", lunes: " ", martes: " ", miercoles: " ", jueves: " ", viernes: " "},
  { hora: "2pm-3pm", lunes: " ", martes: " ", miercoles: " ", jueves: " ", viernes: " "},
  { hora: "3pm-4pm", lunes: " ", martes: " ", miercoles: " ", jueves: " ", viernes: " "},
  { hora: "4pm-5pm", lunes: " ", martes: " ", miercoles: " ", jueves: " ", viernes: " "},
  { hora: "5pm-6pm", lunes: " ", martes: " ", miercoles: " ", jueves: " ", viernes: " "},
]

const Header = () => {
  return (
    <div className="portahorario">
      <div className="AppHorario">
        <table>
          <tr>
            <th>HORA</th>
            <th>LUNES</th>
            <th>MARTES</th>
            <th>MIERCOLES</th>
            <th>JUEVES</th>
            <th>VIERNES</th>
            </tr>
            {data.map((val, key) => {
              return (
              <tr key={key}>
                <td>{val.hora}</td>
                <td>{val.lunes}</td>
                <td>{val.miercoles}</td>
                <td>{val.jueves}</td>
                <td>{val.viernes}</td>
                </tr>
                )
                })}
                </table>
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