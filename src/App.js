import React, { useState, useEffect } from "react";
import './index.css'
import axios from 'axios';
import styled from 'styled-components'
import Image from './Image'

const StyledApp = styled.div`
background-color:black;
padding-bottom:2rem;

&:hover{
  background-color:red;
}
`

function App() {
  const [images, setImage] = useState([]);
 
  
  useEffect(() =>{
     axios
        .get('https://api.nasa.gov/planetary/apod?api_key=w0V35ecxUKX0IkeHaoeMJKD6m8zO0lmgDmgkzWJc')
        .then((res) =>{
          console.log(res.data.url)
          console.log(res)
          setImage(res.data)
        })
        .catch((err) =>{
          console.log(err)
        })
  },[]);

  return (
    <StyledApp>
        <Image images={ images }/>
    </StyledApp>
  );
}

export default App; 
