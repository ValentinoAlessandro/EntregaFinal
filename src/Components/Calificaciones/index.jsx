import React from 'react';

const data = [
  { materia: " ", parcial1: " ", parcial2: " ", final: " " },
  { materia: " ", parcial1: " ", parcial2: " ", final: " " },
  { materia: " ", parcial1: " ", parcial2: " ", final: " "},
  { materia: " ", parcial1: " ", parcial2: " ", final: " "},
]

let MA = "ALUMNO"

const Header = () => {
  return (
    <div className="portadacal">
      <div className="App">
        <table>
          <tr>
            <th>{MA}</th>
            <th>PARCIAL1</th>
            <th>PARCIAL2</th>
            <th>FINAL</th>
            </tr>
            {data.map((val, key) => {
              return (
              <tr key={key}>
                <td>{val.materia}</td>
                <td>{val.parcial1}</td>
                <td>{val.parcial2}</td>
                <td>{val.final}</td>
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
