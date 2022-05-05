import React from 'react';
import './header.css';

const Header = () => {
  const handlerLogout = () => {
    console.log('logout');
  };
  return (
    <header>
      <div>
        <img src="./logo.png" alt="Logo Of web site MyClients" />
      </div>
      <div id="logout" onClick={handlerLogout}>
        Sair
      </div>
    </header>
  );
};

export default Header;
