/* eslint-disable react/prop-types */
/* prettier-disable */
import './clients.css';

import { DeleteClient } from '../../utils/api/clients/deleteClient';

import { useNavigate } from 'react-router-dom';
import Client from '../Client';

const Clients = ({
  clients,
  loadData,
  userId,
}) => {
  const Navigate = useNavigate();

  const handleDeleteClient = async (clients) => {
    console.log('Delete client', userId, clients);
    await DeleteClient(userId, clients);
    await loadData();
    Navigate('/');
  };

  return (
    <section className="container-clients">
      <h1>Clientes</h1>

      <Client
        clients={clients}
        handleDeleteClient={handleDeleteClient}
      />
    </section>
  );
};

export default Clients;
