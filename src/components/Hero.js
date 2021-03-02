import React from 'react'

import './Hero.css';

function Hero ({ title , cover , description}) {
  return (
    <div className="Hero">
      <h1>{title}</h1>
      <img src={cover} alt= "image"></img>
      <h2>{description}</h2>
    </div>
  );
}

export default Hero;