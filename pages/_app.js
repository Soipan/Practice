import '../styles/globals.css';
import Navbar from '../Components/Navbar';
import { UserContext } from '../lib/context';
import { useUserData } from '../lib/hooks';
import { Toaster } from 'react-hot-toast';

function fireship({ Component, pageProps }) {
  const userData = useUserData();

  return (
    <UserContext.Provider value={userData}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster/>
    </UserContext.Provider>
  );
}

export default fireship;
