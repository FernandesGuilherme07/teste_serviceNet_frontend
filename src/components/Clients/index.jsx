import './clients.css';
import Client from '../Client';

import P from 'prop-types';

const Clients = ({ clients, handleDeleteClient }) => {
  return (
    <section className="container-clients">
      <h1>Clientes</h1>

      <Client clients={clients} handleDeleteClient={handleDeleteClient} />
    </section>
  );
};

Clients.propTypes = {
  clients: P.array.isRequired,
  handleDeleteClient: P.func.isRequired,
};

export default Clients;
