import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CharacterCard from "./components/Character";
import './App.css';

const Warpper = styled.div`
width: 100%;
height: 100%;
margin: 0;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [data, setData] = useState([]);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should https://swapi.dev/
  // sync up with, if any. https://swapi.py4e.com/
useEffect(() => {
  axios
   .get(`https://swapi.dev/api/people/`) 
   .then((res) => {
     console.log("this is the data from API: ", res.data.results);
     setData(res.data.results); //array of 10 objects
   })
   .catch((err) => {
     console.log("this didnt work: ", err);
   })
}, []);
  return (
    <Warpper className="App">
      <h1 className="Header">Start Wars Characters</h1>
      <CharacterCard data={data} />
    </Warpper>
  );
}

export default App;
