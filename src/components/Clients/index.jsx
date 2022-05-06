/* eslint-disable react/prop-types */
import './clients.css';
import { Link } from 'react-router-dom';
import { DeleteClient } from '../../utils/api';

const Clients = ({ clients, loadData }) => {
  const handleDeleteClient = async (clients) => {
    const userId = '62544f36b5e025f348d5e1fb';
    console.log('Delete client', userId, clients);
    await DeleteClient(userId, clients);
    await loadData();
  };

  return (
    <section className="container-clients">
      <h1>Clientes</h1>

      {clients.map((client) => (
        <div id="clients" key={client._id}>
          <div id="infos">
            <h2>{client.name}</h2>
            <div id="email-tell">
              <div>
                <p>Email:</p>
                <h3 id="email">{client.email}</h3>
              </div>
              <div>
                <p>Data de nascimento</p>
                <h3>{client.brith}</h3>
              </div>
            </div>
          </div>
          <div id="buttons">
            <button id="button-edit">
              <Link className="Link" to="/edit/:id">
                {' '}
                Editar
              </Link>
            </button>
            <button
              id="button-delete"
              onClick={() => handleDeleteClient(client._id)}
            >
              Excluir
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Clients;
