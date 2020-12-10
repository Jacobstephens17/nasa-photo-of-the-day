import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Image from './Image'


function App() {
  const [images, setImage] = useState([]);
 
  
  useEffect(() =>{
     axios
        .get('https://api.nasa.gov/planetary/apod?api_key=w0V35ecxUKX0IkeHaoeMJKD6m8zO0lmgDmgkzWJc')
        .then((res) =>{
          console.log(res.data.url)
          setImage(res.data.url)
        })
        .catch((err) =>{
          console.log(err)
        })
  },[]);

  return (
    <div className="App">
   
      <Image images={ images } />
     
    </div>
  );
}

export default App; 
