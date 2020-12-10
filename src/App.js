import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Date from './Date'
import Explanation from './Explanation'
import Image from './Image'
import Title from './Title'

function App() {

  let [nasaData, setNasaData] = useState([]);

  // let [date, setDate] = useState([]);
  // let [explanation, setExplanation] = useState([]);
  // let [title, setTitle] = useState([]);
  // let [imageUrl, setImageUrl] = useState([]);
  
  useEffect(() =>{
    const nasaDataFetch = () => { 
      axios
        .get('https://api.nasa.gov/planetary/apod?api_key=w0V35ecxUKX0IkeHaoeMJKD6m8zO0lmgDmgkzWJc')
        .then((res) =>{
          setNasaData(res.data)
        })
        .catch((err) =>{
          console.log(err)
        })
      }
      nasaDataFetch()
  },[]);
  
  console.log('nasaData', nasaData)
 

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      {/* <App/> */}
    </div>
  );
}

export default App; 
