import React from 'react'
import './home.scss'

const Box = ({ groupName, imageUrl }) => {
    return (
      <div className="box">
        <img src={imageUrl} alt={groupName} />
        <div className="overlay"></div>
        <div className="text" >{groupName}</div>
      </div>
    );
  }
  
  export default Box;

