import { useContext, useEffect } from 'react';
import loadingGif from '../assets/loadingGif.gif';
import {DataContext} from '../contexts/DataContexts';

const LoadingScreen = () => {

  const {getGitData} = useContext(DataContext);

  useEffect(() => {
    
    getGitData();
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center overflow-hidden">
      <div className='flex flex-col items-center'>
        <img className='w-[450px]' src={loadingGif} alt="loading..." />
        <div className='text-4xl mt-6 glitchFont tracking-widest'>Loading</div>
      </div>
    </div>
  )
}

export default LoadingScreen