import React, { useState } from 'react';

import './login.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(setEmail.value);

  return (
    <form action="" id="form">
      <div id="login">
        <h1>Login</h1>
        <section>
          <label htmlFor="email"> Email</label>
          <input type="email" required name="email" value={setEmail} onChange={email} placeholder="Seu email..." />
        </section>
        <section>
          <label htmlFor="password">Senha </label>
          <input
            type="password"
            required
            name="password"
            value={password}
            onChange={setPassword}
            placeholder="Sua senha..."
          />
        </section>
        <section id="container">
          <button>Entrar</button>
        </section>
      </div>
    </form>
  );
};

export default LoginPage;
