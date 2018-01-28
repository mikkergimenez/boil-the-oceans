import React, { Component } from 'react';
import './Component.css';

import { Link } from 'react-router-dom'

// Inspiration: https://subtle.justgoodthemes.com/how-to-choose-an-interior-designer/

const Lumber = ({ subject, title, tagline, content, technologies, type, backgroundImage }) => {
  var style = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover"
  }

  return (
    <div className="industry-blog-container">
      <div className="cover-image-container" style={ style }>
        <div className="cover-title">
          <center>
            <div className="subject">{subject}</div>
            <h1>{title}</h1>
            <hr className="title-narrow"/>
            <h2>{tagline}</h2>
          </center>
        </div>
      </div>
      <div className="Blog container">
      <p dangerouslySetInnerHTML={{__html: content}}>
      </p>
      {Object.keys(technologies).map(function(i) {
        return (<p key={i}>{technologies[i]}</p>);
      })}
      </div>
    </div>

  );
}

export default Lumber;
