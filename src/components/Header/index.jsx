import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './header.css';

const Header = () => {
  const { logout } = useContext(AuthContext);
  const handlerLogout = () => {
    logout();
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
