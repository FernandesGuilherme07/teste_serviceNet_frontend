import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import Clients from '../../components/Clients';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import LoadingError from '../../components/LoadingError';
import { AuthContext } from '../../context/AuthContext';
import { getClients } from '../../utils/api/clients/getClients';

import './home.css';

const HomePage = () => {
  const { userId } = useContext(AuthContext);

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
  }, []);

  const searchLowerCase = search.toLocaleLowerCase();

  const filteredClient = clients.filter((client) =>
    client.name.toLowerCase().includes(searchLowerCase),
  );

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

      <Clients clients={filteredClient} loadData={loadData} />
    </>
  );
};

export default HomePage;
