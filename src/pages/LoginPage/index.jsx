import React, { useState } from 'react';

import './login.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(email);
  console.log(password);

  return (
    <div className="body">
      <form action="" id="form">
        <div id="login">
          <section id="container-logo">
            <img src="./logo.png" alt="" />
          </section>

          <section>
            <label htmlFor="email"> Email</label>
            <input
              type="email"
              required
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu email..."
            />
          </section>
          <section>
            <label htmlFor="password">Senha </label>
            <input
              type="password"
              required
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Sua senha..."
            />
          </section>
          <section id="container-button">
            <button>Entrar</button>
          </section>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
