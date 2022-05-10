import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Clients from '../../components/Clients';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import LoadingError from '../../components/LoadingError';
import { AuthContext } from '../../context/AuthContext';
import { getClients } from '../../utils/api/clients/getClients';
import { DeleteClient } from '../../utils/api/clients/deleteClient';

import './home.css';

const HomePage = () => {
  const Navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const userId = user.id;
  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);

  const loadData = async (userId, query = '') => {
    try {
      setLoading(true);
      const response = await getClients(userId, query);
      setClients(response.data);
      setLoading(false);
    } catch (error) {
      console.log({ err: error });
      setLoadingError(true);
    }
  };

  useEffect(() => {
    (async () => await loadData(userId))();
  }, [userId]);

  const searchLowerCase = search.toLocaleLowerCase();

  const filteredClient = clients.filter((client) =>
    client.name.toLowerCase().includes(searchLowerCase),
  );

  const handleDeleteClient = async (client) => {
    await DeleteClient(userId, client);
    await loadData();
    Navigate('/');
  };

  if (loadingError) {
    return <LoadingError />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <div className="container-header">
        <Link className="Link" to={'./add'}>
          <button>Adicionar cliente</button>
        </Link>

        <input
          type="text"
          placeholder="pesquisar cliente..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <Clients
        clients={filteredClient}
        loadData={loadData}
        userId={userId}
        handleDeleteClient={handleDeleteClient}
      />
    </>
  );
};

export default HomePage;
