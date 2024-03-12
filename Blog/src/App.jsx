import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { DataContextProvider } from './contexts/DataContexts';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import LoadingScreen from './components/LoadingScreen';

const App = () => {
  const [showContain, setShowContain] = useState(false);
  const [loadingScreen, setLoadingScreen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoadingScreen(false);
      setShowContain(true);
    }, 3500);
    setTimeout(() => {
      navigate('/social');
    },3500);
  }, []);

  return (
    <>
      <DataContextProvider>
        {loadingScreen && <LoadingScreen />}
        {showContain && <div className="containerPrincipal">
          <Banner />
          <NavBar />
          <Outlet />
        </div>}
      </DataContextProvider>
    </>
  )
}

export default App