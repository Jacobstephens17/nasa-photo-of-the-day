import React from "react";
import styled from 'styled-components'
import './index.css'

const StyledHead = styled.h1`
color:orange;
display:flex;
justify-content:center;
padding-top:1rem;

&:hover{
  color:green;
}
` 
const StyledP = styled.p`
color:orange;
display:flex;
justify-content:center;
padding-top:1rem;
margin:auto;
text-align:center;
width:75%;

&:hover{
  color:green;
}
` 



  export default function Image(props){
    const { images,  } = props;

    return (
      <div>
        <StyledHead> Image Of The Day!</StyledHead>
        {/* <img src='{ images }'></img> */}
        {/* <iframe src={ images } width="100%" height="300"></iframe> */}
        
          <img className="img" src={images.url}></img>

          <StyledHead>
            {images.title}
          </StyledHead>
          <StyledP>{images.explanation}</StyledP>
          <StyledP>{images.copyright}</StyledP>

      </div>
    )
  };