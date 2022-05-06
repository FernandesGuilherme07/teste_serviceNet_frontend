/* eslint-disable react/prop-types */
/* prettier-disable */
import './clients.css';
import { Link } from 'react-router-dom';
import { DeleteClient } from '../../utils/api';
import Client from '../Client';

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

      <Client clients={clients} handleDeleteClient={handleDeleteClient} />
    </section>
  );
};

export default Clients;
