import React, { useState } from 'react';
import Header from '../../components/Header';

import './add.css';

const AddClient = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [brith, setBrith] = useState('');
  return (
    <>
      <Header />
      <div className="container">
        <form action="">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Senha</label>
          <input
            type="text"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="brith">Data de nascimento</label>
          <input
            type="text"
            name="brith"
            value={brith}
            onChange={(e) => setBrith(e.target.value)}
          />
          <div className="container-button">
            <button>+ adicionar cliente</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddClient;
