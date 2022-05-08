import React, {
  useContext,
  useEffect,
  useState,
} from 'react';
import { Link } from 'react-router-dom';

import Clients from '../../components/Clients';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import LoadingError from '../../components/LoadingError';
import { AuthContext } from '../../context/AuthContext';
import { getClients } from '../../utils/api/clients/getClients';

import './home.css';

const HomePage = () => {
  const { user } = useContext(AuthContext);
  const userId = user.id;

  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] =
    useState(false);

  const loadData = async (userId, query = '') => {
    try {
      setLoading(true);
      const response = await getClients(
        userId,
        query,
      );
      setClients(response.data);
      console.log(userId);
      setLoading(false);
    } catch (error) {
      console.log({ err: error });
      setLoadingError(true);
    }
  };

  useEffect(() => {
    (async () => await loadData(userId))();
  }, [userId]);

  const searchLowerCase =
    search.toLocaleLowerCase();

  const filteredClient = clients.filter(
    (client) =>
      client.name
        .toLowerCase()
        .includes(searchLowerCase),
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
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </div>

      <Clients
        clients={filteredClient}
        loadData={loadData}
        userId={userId}
      />
    </>
  );
};

export default HomePage;
