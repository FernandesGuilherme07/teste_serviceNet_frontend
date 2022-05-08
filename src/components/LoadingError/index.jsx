import {
  Link,
  useParams,
} from 'react-router-dom';

import './loadingError.css';

const LoadingError = () => {
  const { id } = useParams();
  return (
    <div className="loading">
      Erro ao carregar os dados de Clientes.{' '}
      <Link to={`/${id}`}>voltar</Link>
    </div>
  );
};

export default LoadingError;
