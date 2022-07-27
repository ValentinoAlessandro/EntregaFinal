import React from 'react';

const data = [
  { materia: "Diseñoweb", parcial1: 80, parcial2: 80, final: 90 },
  { materia: "Control", parcial1: 70, parcial2: 50, final: 70 },
  { materia: "Embebidos", parcial1: 100, parcial2: 100, final: 100},
  { materia: "Etica", parcial1: 80, parcial2: 90, final: 95},
]

const Header = () => {
  return (
    <div className="portadacal">
      <div className="App">
        <table>
          <tr>
            <th>MATERIA</th>
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
