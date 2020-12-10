import React from "react";
import styled from 'styled-components'

const StyledHead = styled.h1`
color:red;

` 

  export default function Image(props){
    const { images } = props;

    return (
      <div>
        <StyledHead> Image Of The Day!</StyledHead>
        {/* <img src='{ images }'></img> */}
        {/* <iframe src={ images } width="100%" height="300"></iframe> */}
        
          <img src={images}></img>
      </div>
    )
  };