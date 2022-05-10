import { Link } from 'react-router-dom';
import P from 'prop-types';

import './client.css';

const Client = ({ clients, handleDeleteClient }) => {
  return clients.map((client) => (
    <div id="clients" key={client.email}>
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
          <Link
            className="Link"
            to={{
              pathname: `/edit/${client._id}`,
            }}
          >
            {' '}
            Editar
          </Link>
        </button>
        <button
          id="button-delete"
          onClick={() => handleDeleteClient(client._id)}
        >
          excluir
        </button>
      </div>
    </div>
  ));
};

Clients.propTypes = {
  clients: P.object.isRequired,
  handleDeleteClient: P.func.isRequired,
};

export default Client;
