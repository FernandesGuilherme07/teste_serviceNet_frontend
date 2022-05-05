import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  const handlerLogout = () => {
    console.log('logout');
  };
  return (
    <header>
      <div>
        <Link to="/">
          <img src="../logo.png" alt="Logo Of web site MyClients" />
        </Link>
      </div>
      <div id="logout" onClick={handlerLogout}>
        Sair
      </div>
    </header>
  );
};

export default Header;
