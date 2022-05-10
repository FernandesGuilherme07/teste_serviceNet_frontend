import './App.css';
import AppRoutes from '../routes';
import { AuthProvider } from '../context/AuthProvider';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const App = () => {
  return (
    <AuthProvider>
      <AppRoutes />;
    </AuthProvider>
  );
};

export default App;
