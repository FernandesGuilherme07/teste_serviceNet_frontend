import './App.css';
import AppRoutes from '../routes';

import { AuthProvider } from '../context/AuthProvider';

const App = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
};

export default App;
