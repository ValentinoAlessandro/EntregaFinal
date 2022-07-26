import React from 'react';
import Navbar from '../Navbar';
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          width: '100%',

          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
