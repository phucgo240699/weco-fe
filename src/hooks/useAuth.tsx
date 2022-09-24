import { useContext } from 'react';
import { AuthContext } from 'contexts/AuthProvider';

const useAuth = () => {
  const context: any = useContext(AuthContext);
  return context;
}

export default useAuth