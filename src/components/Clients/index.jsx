/* eslint-disable react/prop-types */
import './clients.css';

const Clients = ({ clients }) => {
  return (
    <section className="container-clients">
      <h1>Clientes</h1>

      {clients.map((client) => (
        <div id="clients" key={client.id}>
          <div id="infos">
            <h2>{client.name}</h2>
            <div id="email-tell">
              <div>
                <p>Email:</p>
                <h3>{client.email}</h3>
              </div>
              <div>
                <p>Data de nascimento</p>
                <h3>{client.brith}</h3>
              </div>
            </div>
          </div>
          <div id="buttons">
            <button id="button-edit">Editar</button>
            <button id="button-delete">Excluir</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Clients;
