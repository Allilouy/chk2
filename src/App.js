import React from 'react';
import './App.css';
import photo from "./imageInSrc.jpg";


function App() {
  return (
    <div style={{border:'solid 1px black', maxWidth:'100vw'}}>
    <h1 className="title red">My title</h1>
  
    <br />
  
  <img src={photo} style={{maxWidth:"150px"}} />
  
  <br />
  
    <img src="/imageInPublic.jpg" style={{width: '200px'}} />
  
  
  </div>
  
  );
}

export default App;
