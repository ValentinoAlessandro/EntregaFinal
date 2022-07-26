import React from 'react';
const Header = () => {
  return (
    <div className="portada">
      <div className="portada_container">
        <div className="portada_aviso">
          <p>Aviso Importante</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            dignissim risus vel arcu convallis, nec condimentum lectus euismod.
            Ut tempor nisi id dapibus ultrices. Nullam molestie volutpat
            commodo. Aenean vitae ex at tortor iaculis dictum vel ut lacus. In
            eleifend, elit ut laoreet sollicitudin, magna ipsum elementum urna,
            sit amet maximus turpis massa quis nunc.
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
