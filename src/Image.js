import React from "react";


  
  export default function Image(props){
    const { images } = props;

    return (
      <div>
        <h1>Image Of The Day!</h1>
        <img src='{images}'></img>
      </div>
    )
  };