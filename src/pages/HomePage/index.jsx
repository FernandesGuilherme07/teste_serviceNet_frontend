import React, { useEffect, useState } from 'react';
import Clients from '../../components/Clients';
import Header from '../../components/Header';
import { getClients } from '../../utils/api';
import './home.css';

const userId = '62544f36b5e025f348d5e1fb';

const HomePage = () => {
  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState('');

  const loadData = async (query = '') => {
    const response = await getClients(userId);

    setClients(response.data);
  };

  useEffect(() => {
    (async () => await loadData())();
    console.log('fuiexecutado');
  }, []);

  const handlerAdd = () => {
    console.log('adicionar cliente.');
  };

  return (
    <>
      <Header />
      <div className="container-header">
        <button onClick={handlerAdd}>+ adicionar cliente</button>
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
