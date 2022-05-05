import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Clients from '../../components/Clients';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import LoadingError from '../../components/LoadingError';

import { getClients } from '../../utils/api';

import './home.css';

const userId = '62544f36b5e025f348d5e1fb';

const HomePage = () => {
  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);

  const loadData = async (query = '') => {
    try {
      setLoading(true);
      const response = await getClients(userId);
      setClients(response.data);
      setLoading(false);
    } catch (error) {
      console.log(erro);
      setLoadingError(true);
    }
  };

  useEffect(() => {
    (async () => await loadData())();
    console.log('fuiexecutado');
  }, []);

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
          placeholder="pesquisar cliente por email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <Clients clients={clients} /> {console.log(clients)}
    </>
  );
};

export default HomePage;
