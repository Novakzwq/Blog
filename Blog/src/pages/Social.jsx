import { useState, useEffect, useContext, useRef } from 'react';
import {DataContext} from '../contexts/DataContexts';
import musicIcon from '../assets/songIcon.jpg';
import bg from '../assets/bg.mp3';
import bannerBio from '../assets/bannerBio.jpg';
import chainsaw from '../assets/chainsaw.webp';
import hxh from '../assets/hxh.jpg';
import kokou_no_hito from '../assets/kokou.jpg';
import souleater from '../assets/souleater.jpg';
import github_icon from '../assets/github_icon.png';
import twitch_icon from '../assets/twitch_icon.png';
import instagram_icon from '../assets/insta_icon.png';
import anime_girl from '../assets/anime_girl.gif';
import dogs from '../assets/dogs.gif';
import './Social.css';

export const Social = () => {

  const [opacity, setOpacity] = useState(0);
  const [margin, setMargin] = useState('200');
  const { gitData, getGitData } = useContext(DataContext);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(bg);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.1;
    }

    audioRef.current.play();

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setOpacity(1);
      setMargin('20');
    },10);
  }, []);

  return (
    <div
    style={{
      transition: '1s all',
      opacity: opacity,
      marginLeft: `${margin}px`
    }}
    className={`w-screen flex items-center transition justify-evenly mb-10`}>
      {/* SETAR CONDICIONAIS RELATIVAS AOS BANCOS DE DADOS */}
      {gitData && (
        <Bio gitData={gitData} />
      )}
    </div>
  )
}

export const Bio = ({ gitData }) => {
  return <div className='flex flex-col terminus mt-5'>
    <div className='flex gap-3 mb-3'>
      <BioTitle />
      <BioBanner />
    </div>
    <div className='flex'>
      <BioFavoriteMusic />
      <BioText />
      <BioGitProfile gitData={gitData} />
    </div>
  </div>
}

export const Technologies = () => {
  return <div className='ml-4 mt-6'>
    <div>Technologies I use</div>
    <ul className='w-[200px] mt-1 flex gap-10 ml-10'>
      <div>
        <li className='list-disc text-cyan-500'>javascript</li>
        <li className='list-disc'>react</li>
        <li className='list-disc text-cyan-500'>nodejs</li>
      </div>
      <div>
        <li className='list-disc'>html</li>
        <li className='list-disc text-cyan-500'>css3</li>
        <li className='list-disc'>csharp</li>
      </div>
      <div>
        <li className='list-disc text-cyan-500'>java</li>
        <li className='list-disc'>lua</li>
        <li className='list-disc text-cyan-500'>crystal</li>
      </div>
    </ul>
  </div>
}

export const BioSocialMedias = () => {
  return <div className='flex h-full mt-2 gap-1'>
    <Media src={github_icon} link="https://github.com/7nyc" />
    <Media src={twitch_icon} link="https://www.twitch.tv/nycolaswqqqqqqqqqqq" />
    <Media src={instagram_icon} link="https://www.instagram.com/looser333/" />
  </div>
}

export const Media = ({src, link}) => {
  return <a
    target="_blank" 
    rel="noopener noreferrer"
    href={link}
  >
    <img className='w-[35px] transition duration-400 hover:opacity-[.6]' src={src} alt="social link" />
  </a>
}

export const BioGitProfile = ({gitData}) => {
  return <div className='flex flex-col border w-[218px] px-4 py-2'>
    <div className='border-b pb-1 pl-0 mb-3'>GitHub Profile</div>
    <a
    target="_blank" 
    rel="noopener noreferrer"
    href="https://github.com/7nyc ">
      <img
        className='w-[200px] transition duration-500 hover:opacity-[.6]'
        src={gitData.avatar_url}
        alt='github avatar'
      />
    </a>
    <div className='mt-3'>
      <div className='pl-2'>I like</div>
      <ul className='list-disc'>
        <li className='ml-11 p-2'>Games</li>
        <li className='ml-11 p-2'>Cats</li>
        <li className='ml-11 p-2'>Guitar</li>
      </ul>
    </div>
  </div>
}

export const BioText = () => {
  return <div className='border w-[610px] mx-3'>
    <div className='bg-gray-800 mx-4'>Welcome to my website :&#41;</div>
    <div className='m-4'>Mangás I recommend </div>
    <div className='flex justify-center gap-10'>
      <Manga 
        src={hxh} 
        manga_name={"HxH"} 
        link={""} 
      />
      <Manga 
        src={kokou_no_hito} 
        manga_name={"Kokou no hito"} 
        link={""} 
      />
      <Manga 
        src={chainsaw} 
        manga_name={"Chainsaw Man"} 
        link={""} 
      />
      <Manga 
        src={souleater} 
        manga_name={"Soul Eater"} 
        link={""} 
      />
    </div>
    <div className='flex'>
      <Technologies />
      <Gifs />
    </div>
  </div>
}

export const Gifs = () => {
  return <div className='flex items-center ml-24 mt-10'>
  <img className='w-[110px] h-[100px]' src={anime_girl} alt="😎" />
  <img className='w-[120px] h-[90px] mt-2' src={dogs} alt="dogoes" />
</div>
}

export const Manga = ({src, manga_name, link}) => {
  return <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className='flex flex-col items-center gap-1 transition duration-300 hover:opacity-[.6]'
  >
    <img className='w-[100px] h-[150px]' src={src} alt="manga icon" />
    <div>{manga_name}</div>
  </a>
}

export const BioFavoriteMusic = () => {
  return <div className='flex flex-col w-[240px] border p-4'>
    <div className='border-b px-20 pb-1 pl-0 mb-7'>Favorite Music</div>
    <div
      className='flex flex-col'>
      <a 
        target="_blank" 
        rel="noopener noreferrer"
        href="https://open.spotify.com/intl-pt/track/7lQawTg2Pi1dA8IB2h3Yiz?si=454399fdfe834593&nd=1"
      >
        <img
          className='transition duration-500 hover:opacity-[.6]'
          src={musicIcon} 
          alt="music icon" />
      </a>
      <div className='mt-1'>for you</div>
      <div className='opacity-[0.6]'>starseeker</div>
    </div>
    <BioSocialMedias />
  </div>
}


// HEADER
export const BioTitle = () => {
  return <div className='flex justify-center items-center w-[280px] h-[200px] border'>
    <div className='flex flex-col gap-2 text-center'>
      <div className='text-2xl text-cyan-500'>Looser</div>
      <div className='text-sm flex gap-2 justify-center'>
        <a 
          href="https://learn.microsoft.com/en-us/dotnet/csharp/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='border-b border-cyan-400'>
          <TitleLang text='c#' />
        </a>
        and
        <a 
          href="https://docs.oracle.com/javase/8/docs/api/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='border-b border-cyan-400'>
          <TitleLang text='java' />
        </a>
        dev
      </div>
    </div>
  </div>
}
export const TitleLang = ({text}) => {
  return <span className='text-cyan-500'>{text}</span>
}
export const BioBanner = () => {
  return <div className='flex flex-col'>
    <img className='w-[800px] h-[162px]' src={bannerBio} alt="bio banner" />
    <div className='w-[800px] border p-2 text-center text-sm'>Taylor Switft - New Jeans - Lucas ART - Yung Buda - Lieless - Yung Lixo - Devilish Trio - Ichiko Aoba</div>
  </div>
}