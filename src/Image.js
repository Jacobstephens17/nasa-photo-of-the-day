import React from "react";


  
  export default function Image(props){
    const { images } = props;

    return (
      <div>
        <h1>Image Of The Day!</h1>
        {/* <img src='{ images }'></img> */}
        <iframe src={ images } width="100%" height="300"></iframe>
      </div>
    )
  };