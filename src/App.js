import React, { useState, useEffect } from "react";

import axios from 'axios';
import styled from 'styled-components'
import Image from './Image'

const StyledApp = styled.div`
background-color:black;
width:100%;

`
const StyledImg = styled.div`
width:50%;
`
function App() {
  const [images, setImage] = useState([]);
 
  
  useEffect(() =>{
     axios
        .get('https://api.nasa.gov/planetary/apod?api_key=w0V35ecxUKX0IkeHaoeMJKD6m8zO0lmgDmgkzWJc')
        .then((res) =>{
          console.log(res.data.url)
          console.log(res)
          setImage(res.data.url)
        })
        .catch((err) =>{
          console.log(err)
        })
  },[]);

  return (
    <StyledApp>
        <Image images={ images } widht='50%'/>
    </StyledApp>
  );
}

export default App; 
