import React from 'react';

const Ding = ({ audioFile }) => {
  
  return (
    <audio id="ding" preload="auto">
      <source src={ audioFile } type="audio/mp3" />
      Your browser does not support the audio tag :(
    </audio>
  );
}

export default Ding;
