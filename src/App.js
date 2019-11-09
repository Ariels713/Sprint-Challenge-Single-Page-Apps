import React, { useState, useEffect } from "react";
import { Route } from 'react-router-dom'

//Axios Import
import Axios from "axios";

//Components
import Nav from './components/Navigation'
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage'
import CharacterCard from "./components/CharacterCard";
import SearchForm from './components/SearchForm'
import CharacterList from './components/CharacterList'

export default function App() {
  const [rmData, setrmData] = useState([]);

  useEffect(() => {
    Axios.get("https://rickandmortyapi.com/api/character")
      // .then(res => console.log(res.data.results))
      .then(res => setrmData(res.data.results))
      .catch(res => console.log(res));
  }, []);

  return (
    <main>
      <Nav />
      <Header />
      <WelcomePage/>
      <SearchForm />
      <CharacterCard rmData={rmData}/>
      <Route exact path='/charlist:id' component={CharacterList} />
    </main>
  );
}
