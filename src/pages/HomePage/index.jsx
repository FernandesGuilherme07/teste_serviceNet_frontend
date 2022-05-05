import React, { useState } from 'react';
import Header from '../../components/Header';
import './home.css';

const HomePage = () => {
  const [client, setClient] = useState('');
  console.log(client);

  const handlerAdd = () => {
    console.log('adicionar cliente.');
  };

  return (
    <>
      <Header />
      <div className="container">
        <button onClick={handlerAdd}>+ adicionar cliente</button>
        <input
          type="text"
          placeholder="pesquisar cliente por email..."
          value={client}
          onChange={(e) => setClient(e.target.value)}
        />
      </div>

      <section className="container-clients">
        <h1>Clientes</h1>
        <div id="clients">
          <div id="infos">
            <h2>pedro</h2>
            <div id="email-tell">
              <div>
                <p>Email:</p>
                <h3>pedro@email.com</h3>
              </div>
              <div>
                <p>Celular:</p>
                <h3>(83) 99826-9958</h3>
              </div>
            </div>
          </div>
          <div id="buttons">
            <button id="button-edit">Editar</button>
            <button id="button-delete">Excluir</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
