import { useState } from 'react';
import { createContext } from "react";
import axios from 'axios';

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {

   const [gitData, setGitData] = useState({});

   async function getGitData(){
      try {
         const url = 'https://api.github.com/users/7nyc';
         const response = await axios.get(url);
         setGitData(response.data);
      } catch (error) {
         console.error(error);
      }
   }

   return <DataContext.Provider value={{  gitData, setGitData, getGitData }}>
      { children }
   </DataContext.Provider>
}